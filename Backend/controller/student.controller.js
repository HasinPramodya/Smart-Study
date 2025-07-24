import Student from "../model/student.model.js";

export async function createStudent(req, res) {

    try{
        await new Student(req.body).save();
        res.status(201).json({
            message: "Student Created Successfully"
        })
    }catch(err){
        res.status(500).jso({
            message: "Student can not be created",
            error: err.message
        })
    }
}

export async function getAllStudents(req,res){

    try{
        const  students = await Student.find();
        res.status(200).json({
            Students: students
        })
    }catch(error){
        res.status(500).json({
            message: "Can not get all students",
            error: error.message
        })
    }

}

export async function getStudentByName(req, res) {

    try{
        const students = await Student.find({
            name : req.body.name
        })

        if(students != null){
            res.status(200).json({
                student: students
            })
        }else{
            res.status(404).json({
                message: "Students not found"
            })
        }


    }catch(err){
        res.status(500).json({
            message: "Can not get student by Name",
            error: err.message
        })
    }


}

export async function getStudentById(req, res) {

    try{
        const student = await Student.find({
                regNo: req.params.id
            })
            if(student != null){
            res.status(200).json({
                student: student
            });
        }else{
            res.status(404).json({
                message: "Student not found"
            })
        }
    }catch(err){
        res.status(500).json({
            message: "Can not get student by ID",
            error: err.message
        })
    }
}



export async function updateStudent(req, res) {

    try{
        await Student.findOneAndUpdate(
            {
                regNo: req.params.id,
            },req.body
        ),
        res.status(200).json({
            message: "Student updated successfully"
        });
    }catch(err){
        res.status(500).json({
            message: "Can not update student",
            error: err.message
        })
    }

}

export async function deleteStudent(req, res) {

try{

    await Student.findOneAndDelete({
        regNo: req.params.id
    }),

    res.status(200).json({
        message: "Student deleted successfully"
    })

}catch(err){
    res.status(500).json({
        message: "Can not delete student",
        error: err.message
    })
}


}
