//console.log("Hello world");

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Student from './models/Student.js';
import StudentRouter from './routes/StudentRouter.js';
import productRouter from './routes/productRouter.js';
import userRouter from './routes/userRouter.js';
import jwt from "jsonwebtoken";


const app = express();
const mongoUrl = "mongodb+srv://Admin:Ravindu@cluster0.xejpojj.mongodb.net/?appName=Cluster0"


 mongoose.connect (mongoUrl,{})

 const connection=mongoose.connection;

connection.once("open",()=>{
    console.log("Database Connected");
})

app.use(bodyParser.json())

/*app.get("/",

(req,res)=>{
    console.log(req)
    console.log("This is a get request");
    
    res.json(
        {
            message : "Hello"
        }
    )
}

);

app.post("/",

(req,res)=>{

  
   const newStudent = new Student (req.body)
 
   newStudent.save().then(
    ()=>{
        res.json({
            message: "Student created"
        })
    }
   ).catch(
    (error)=>{
        res.json({
            message : "Error"
        })
    }
   )

}
);*/
app.use(
    (req,res,next)=>{
        const token = req.header("Authorization")?.replace("Bearer","")
        console.log(token);

        if(token !=null){
            jwt.verify(token,"cbc-secret-key-7973",(error , decoded)=>{
                
                if(!error){
                   // console.log(decoded)
                    req.user= decoded
                }
            })
        }

        next()
    }
)
app.use ("/api/students",StudentRouter)
app.use("/api/products",productRouter)
app.use("/api/users",userRouter)

app.listen( 
    5000,
    ()=>{
        console.log('Server is running on port 5000');
    }
)