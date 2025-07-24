import express from 'express';
import {createStudent, getAllStudents, getStudentById} from '../controller/student.controller.js';
import {deleteStudent, getStudentByName, updateStudent} from "../controller/student.controller.js";

const studentRouter = express.Router();

studentRouter.post('/',createStudent);
studentRouter.get('/', getAllStudents);
studentRouter.get('/name',getStudentByName);
studentRouter.get('/:id',getStudentById);
studentRouter.put('/:id',updateStudent);
studentRouter.delete('/:id',deleteStudent);

export default studentRouter;