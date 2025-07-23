import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema(
    courseId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

);

const Course = mongoose.model('course', courseSchema);

export default Course;