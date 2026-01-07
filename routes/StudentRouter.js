import express from "express";
import Student from "../models/Student.js";
import {getStudents,createStudent, deleteStudent} from "../controllers/studentController.js"

//create StudentRouter

const StudentRouter = express.Router();

StudentRouter.get("/",getStudents)

StudentRouter.post("/",createStudent)

StudentRouter.delete("/", deleteStudent)

export default StudentRouter;