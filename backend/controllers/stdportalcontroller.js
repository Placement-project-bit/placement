const Student = require("../Models/stdportalmodel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require('../middleware/catchAsyncError');
const ApiFeatures = require("../utils/apifeatures");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");


//Create student -- Admin
exports.createstddata = catchAsyncError(
    async(req, res, next)=>{
        const student = await Student.create(req.body);
        res.status(201).json({
            successful:true,
            student
        })
    }
)

//Login User
exports.loginUser = catchAsyncError(
    async (req, res, next) => {
    const { usn, password } = req.body;

    // checking if user has given password and email both
    if (!usn || !password) {
        return next(new ErrorHandler("Please Enter USN & Password", 400));
    }
    const user = await Student.findOne({ usn }).select("+password");
    if (!user) {
        return next(new ErrorHandler("Invalid usn or password", 401));
    }
    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid usn or password", 401));
    }
    sendToken(user, 200, res);
});

//Logout
exports.logout = catchAsyncError(
    async(req,res,next)=>{
      res.cookie("token",null,{
          expires: new Date(Date.now()),
          httpOnly:true
      })
        res.status(200).json({
            success:true,
            message:"logged out"
        })
    }
);

//Update student
exports.updatestddata= catchAsyncError(
    async(req,res,next)=>{
        let student = await Student.findOne({usn:req.params.id});
        if(!student){
            return next(new ErrorHandler("invalid",404));
        }
        //Add cloudinary later
        student = await Student.findOneAndUpdate({usn:req.params.id}, req.body, {new:true});
        res.status(200).json({
            success:true,
            student
        })
    }
);

//Delete student -- Admin
exports.deletestddata = catchAsyncError(
    async(req,res,next)=>{
        let student = await Student.findOne({usn:req.params.id});
        if(!student){
            return next(new ErrorHandler("invalid",404));
        }
        await student.remove();
        res.status(200).json({
            success:true,
            message:"Successfully Deleted"
        })
    }
);

//Get single student details
exports.getstddata = catchAsyncError(
    async(req,res,next)=>{
        let student = await Student.findOne({usn:req.params.id});
        if(!student){
            return next(new ErrorHandler("invalid",404));
        }
        res.status(200).json({
            success:true,
            student
        })
    }
);

//Get all students -- Admin
exports.getAlldata = catchAsyncError(
    async(req, res)=>{

        const resultperpage = 50;
        const stdcount = await Student.countDocuments();
        const apiFeature = new ApiFeatures(Student.find(),req.query)
        .search()
        .filter()
        .pagination(resultperpage);

        const students = await apiFeature.query;
        res.status(200).json({
            success:true,
            students,
            stdcount
        })
    }
);

//Forgot password
exports.forgotPassword = catchAsyncError(
    async(req, res, next)=>{
        const user = await Student.findOne({emailid: req.body.emailid});
        if(!user){
            return next(new ErrorHandler("User not found", 404));
        }

        //Get reset password token
        const resetToken = user.getResetPasswordToken();
        await user.save({validateBeforeSave:false});
        const resetPasswordlink= `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;
        const message = `Your password reset token is: \n\n ${resetPasswordlink} 
        \n\nThe link expires in 10 min.
        \n\n If you have not requested this email then please ignore it.`;
        
        try{
            await sendEmail({
                email: user.emailid,
                subject: `Bit placement portal password recovery`,
                message
            });
            res.status(200).json({
                success:true,
                message:`Email sent to ${user.emailid} successfully`,
            })

        }catch(error){
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;
            await user.save({validateBeforeSave:false});
            return next(new ErrorHandler(error.message,500));
        }
    }
);

//Reset Password
exports.resetPassword = catchAsyncError(
    async(req, res, next)=>{
        //creating hash token
        const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");

        const user = await Student.findOne({
            resetPasswordToken,
            resetPasswordExpire:{$gt: Date.now()},
        });
        if(!user){
            return next(new ErrorHandler("Reset Password token is invalid or has been expired", 400));
        }
        if(req.body.password !== req.body.confirmPassword){
            return next(new ErrorHandler("Password does'nt match", 400));
        }
        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save();
        sendToken(user, 200, res);
    }
);

//Update Password
exports.updatePassword = catchAsyncError(
    async(req, res, next)=>{
        const user = await Student.findById(req.user.id).select("+password");
        const isPasswordMatched = await user.comparePassword(req.body.oldPassword);
        if(!isPasswordMatched){
            return next(new ErrorHandler("Old Password is incorrect", 400));
        }
        if(req.body.newPassword !== req.body.newConfirmPassword){
            return next(new ErrorHandler("Password does not match", 400));
        }

        user.password = req.body.newPassword;
        user.save();
        sendToken(user, 200, res);
    }
);

//Update user role -- Admin
exports.updateuserRole = catchAsyncError(
    async(req, res, next)=>{
        const newUserData = {
            name : req.body.name,
            emailid : req.body.emailid,
            role : req.body.role
        };

        const user = await Student.findOneAndUpdate({usn:req.body.params}, newUserData, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
        res.status(200).json({
            success:true,
            user
        });   
    }
)