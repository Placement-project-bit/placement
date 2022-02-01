const dotenv = require("dotenv");
const app = require("./app");
const connectDatabase = require("./config/database");

//handling uncaught exception
process.on("uncaughtException",()=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to uncaught exception`);
    process.exit(1);
})

dotenv.config({path:"backend/config/config.env"});
//Connecting to database
connectDatabase();


const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
});


//Unhandled Promise rejection
process.on("unhandledRejection",err=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled promise rejection`);
    server.close(()=>{
        process.exit(1);
    })
})