const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

//Don't forget to unique emailid, usn and mobileno
const stdSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true, "Please Enter your first name"],
        default:"---"
    },
    usn:{
        type:String,
        required:[true, "Enter usn data"],
    },
    role:{
        type:String,
        default:"student"
    },
    bio:{
        type:String,
        required:[true,"Enter bio data"],
        default:"---"
    },
    profilepic:[{
        public_id:{
            type:String,
            required:true,
            default:"public_id.com"
        },
        url:{
            type:String,
            default:process.env.PP
        }
    }],
    password:{
        //Add min length
        type:String,
        required:[true, "Enter password"],
        select:false
    },
    gender:{
        type:String,
        required:[true, "Enter gender data"],
        default:"---"
    },
    emailid:{
        type:String,
        required:[true,"Enter email data"]
    },
    mobileno:{
        type:Number,
        required:[true, "Enter number data"],
        length:[10, "enter valid phone number"],
        default:000000000
    },
    dob:{
        type:Date,
        default:Date.now
    },
    tenthgpa:{
        type:Number,
        required:[true,"Enter 10gpa data"],
        default:0.0
    },
    twelthgpa:{
        type:Number,
        required:[true, "Enter 12thgpa data"],
        default:0.0
    },
    deggpa:{
        type:Number,
        required:false,
        default:0.0
    },
    backlogs:{
        type:Number,
        required:[true, "Enter no. of backlogs"],
        default:0.0
    },
    company:{
        type:String,
        default:"none"
    },
    resume:{
        type:String,
        required:[true, "Enter resume link data"],
        default:"---"
    },
    extprofileLinks:[{
        linkedin:{
            type:String,
        },
        glassdoor:{
            type:String
        }
    }],
    clubs:[{
        type:String
    }],
    certifications:[{
        type:String
    }],
    projectandinterns:[{
        type:String
    }],
    resetPasswordToken:String,
    resetPasswordExpire: Date
})

//Hashing Password
stdSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    this.password = await bcryptjs.hash(this.password, 10);
  }
);

//Generating JWT Token
stdSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
};  

//Compare password
stdSchema.methods.comparePassword = async function (password) {
    return await bcryptjs.compare(password, this.password);
};

//Generating password reset TokenExpiredError
stdSchema.methods.getResetPasswordToken = function(){
  //Generating Token
  const resetToken = crypto.randomBytes(20).toString("hex");

  //Hashing and adding to loginSchema
  this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex"); 
  this.resetPasswordExpire = Date.now() + 10*60*1000;
  return resetToken;
};


module.exports = mongoose.model("Student",stdSchema);