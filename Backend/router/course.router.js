import express from 'express';
import { createCourse, getAllCourses, updateCourse, deleteCourse } from '../controller/course.controller.js';

const courseRouter = express.Router();

courseRouter.post('/',createCourse);
courseRouter.get('/', getAllCourses);
courseRouter.put('/:id', updateCourse);
courseRouter.delete('/:id', deleteCourse);

export default courseRouter;

