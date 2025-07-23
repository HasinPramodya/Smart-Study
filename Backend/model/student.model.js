import mongoose from 'mongoose';
const studentSchema = new mongoose.Schema({
    regNo : {
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phoneNo:{
        type: String,
        required: true
    },
    course_details :{
        type: [
            {
                courseId: String,
                courseName: String,
                grade: String,
                marks: Number,
                reg_date: {
                    type: Date,
                    default: Date.now
                }

            }
        ],
        required: true
    }
});

const Student = mongoose.model('students', studentSchema);

export default Student;