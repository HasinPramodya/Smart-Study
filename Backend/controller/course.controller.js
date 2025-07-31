import Course from "../model/course.model.js";

export  async function createCourse(req, res) {

    try{
        let newCourseId;
        const lastCourse = await Course.find().sort({courseId: -1}).limit(1)
        if(lastCourse.length == 0){
            newCourseId = "C001";
        }else{
            const lastCourseId = lastCourse[0].courseId;
            const lastCourseNumber = parseInt(lastCourseId.replace("C00", ""));
            const newCourseNumber = lastCourseNumber + 1;
            newCourseId = "C" + newCourseNumber.toString().padStart(3, '0');

        }
        await new Course({
            courseId: newCourseId,
            name: req.body.name,
            description: req.body.description
        }).save()
        res.status(200).json(
            {
                message : "Course Created Successfully"
            }
        )

    }catch(error){
          console.log(error)
            res.status(500).json({
                message: "Course can not be created",
                error: error.message
            })
    }

}

export async function getAllCourses(req, res) {
    try{
        const courses = await Course.find();
        res.status(200).json({
            Courses: courses
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: "Can not get all courses",
        })
    }


}

export async function updateCourse(req, res) {
    try{
        await Course.findOneAndUpdate({
            courseId : req.params.id
        },req.body)

        res.status(200).json({
            message: "Course Updated Successfully"
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: "Course can not be updated",
            error: error.message
        })
    }

}

export async function deleteCourse(req, res) {


    try{
        await Course.findOneAndDelete({
            courseId : req.params.id
        })
        res.status(200).json(
            {
                message: "Course Deleted Successfully"
            }
        )
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: "Course can not be deleted",
            error: error.message
        })
    }

}