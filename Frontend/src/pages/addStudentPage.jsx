import {useState} from "react";
import toast from "react-hot-toast";
import axios from "axios";
export default function AddStudentPage({onClose}) {

    const [name,setName] = useState("");
    const [address,setAddress] = useState("");
    const [email,setEmail] = useState("");
    const [phoneNo,setPhoneNo] = useState("");
    const [courseDetails, setCourseDetails] = useState([]);
    const [courseId, setCourseId] = useState("");
    const [courseName, setCourseName] = useState("");
    const [gradeAchieved, setGradeAchieved] = useState("");
    const [MARKS, setMARKS] = useState("");
    const [isAddModelDisplayed, setAddModelDisplayed] = useState(false);

    function handleaddStudent() {

        axios.post(import.meta.env.VITE_BACKEND_URL + "/api/student", {
            name: name,
            address: address,
            email: email,
            phoneNo: phoneNo,
            course_details: {
                courseId: courseId,
                courseName: courseName,
                grade: gradeAchieved,
                MARKS: MARKS
            }
        }).then((res)=>{
            console.log(res.data.message);
            toast.success("Student added successfully");
            onClose();
        }).catch((error)=>{
            console.log(error.response.message);
            toast.error("Something went wrong, please try again");
        })
    }

    return(
        <>
            <div className="container mx-auto flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-4">
                    Add Student
                </h1>
                <form className="w-full max-w-lg">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Student Name" onChange={(e)=>{
                            setName(e.target.value)
                        }}/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Address
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Student Address" onChange={(e)=>{
                            setAddress(e.target.value)
                        }}/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Student Email" onChange={(e)=>{
                            setEmail(e.target.value)
                        }}/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Phone No
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Student PhoneNo" onChange={(e)=>{
                            setPhoneNo(e.target.value)
                        }}/>
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Course Id
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Course Id" onChange={(e)=>{
                            setCourseId(e.target.value)
                        }}/>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Course Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="CourseName" onChange={(e)=>{
                            setCourseName(e.target.value)
                        }}/>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Grade Achieved
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Grade Achived" onChange={(e)=>{
                            setGradeAchieved(e.target.value)
                        }}/>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Marks
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Marks" onChange={(e)=>{
                            setMARKS(e.target.value)
                        }}/>
                    </div>

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={()=>{
                        handleaddStudent();
                        setAddModelDisplayed(false);
                    }}>
                        Add Student
                    </button>
                </form>
            </div>
        </>
    )
}