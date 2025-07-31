import { useState, useEffect } from "react";
import axios from "axios";
import { Trash2, Pencil, CircleX } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CircularIndeterminate from "../component/loader.jsx";
import FloatingActionButtonSize from "../component/actionButton.jsx";
import AddStudentPage from "./addStudentPage.jsx";
import EditCoursePage from "./editCoursePage.jsx";
import EditStudentPage from "./editStudentPage.jsx";

export default function ViewStudentPage() {
    const [students, setStudents] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [isAddModelDisplayed, setAddModelDisplayed] = useState(false);
    const [isEditModelDisplayed, setEditModelDisplayed] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!loaded) {
            axios.get(import.meta.env.VITE_BACKEND_URL + "/api/student")
                .then((res) => {
                    setStudents(res.data.Students);
                    setLoaded(true);
                })
                .catch((err) => {
                    console.log(err?.response?.data || err.message);
                });
        }
    }, [loaded]);

    function deleteStudent(regNo) {
        axios.delete(import.meta.env.VITE_BACKEND_URL + "/api/student/" + regNo)
            .then(() => setLoaded(false))
            .catch((err) => {
                console.log(err?.response?.data || err.message);
            });
    }

    return (
        <div className="w-full h-screen flex justify-center items-center relative">
            {loaded && (
                <table className="table-auto border-collapse border border-gray-300 shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-100">
                    <tr>
                        <th className="p-3 border">Reg No</th>
                        <th className="p-3 border">Name</th>
                        <th className="p-3 border">Address</th>
                        <th className="p-3 border">Email</th>
                        <th className="p-3 border">Phone No</th>
                        <th className="p-3 border">Course Details</th>
                        <th className="p-3 border">Action</th>

                    </tr>
                    </thead>
                    <tbody>
                    {students.map((student) => (
                        <tr
                            key={student.regNo}
                            className="border-t hover:bg-gray-50"
                        >
                            <td className="p-3 border">{student.regNo}</td>
                            <td className="p-3 border">{student.name}</td>
                            <td className="p-3 border">{student.address}</td>
                            <td className="p-3 border">{student.email}</td>
                            <td className="p-3 border">{student.phoneNo}</td>
                            {/*<td className="p-3 border">{student.course_details}</td>*/}
                            <td className="p-3 border">
                                <div className="flex gap-3 justify-center">
                                    <Trash2
                                        className="text-red-500 hover:text-red-700 cursor-pointer"
                                        onClick={() => deleteStudent(student.regNo)}
                                    />
                                    <Pencil
                                        className="text-green-500 hover:text-green-700 cursor-pointer"
                                        onClick={() => {
                                            setEditModelDisplayed(true);
                                        }}
                                    />
                                </div>
                            </td>

                        </tr>
                    ))}
                    </tbody>
                </table>
            )}

            {!loaded && <CircularIndeterminate />}


            <div className="fixed bottom-5 right-5">
                <FloatingActionButtonSize onClick={() => setAddModelDisplayed(true)} />
            </div>


            {isAddModelDisplayed && (
                <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-center items-center">
                    <div className="relative bg-white w-[500px] max-w-[90%] max-h-[90%] rounded-lg shadow-lg">

                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-red-600 z-10"
                            onClick={() => setAddModelDisplayed(false)}
                        >
                            <CircleX size={24} />
                        </button>

                        <div className="p-6 max-h-[80vh] overflow-y-auto">
                            <AddStudentPage onClose={()=>{
                                setAddModelDisplayed(false);
                                setLoaded(false);
                            }}/>
                        </div>
                    </div>
                </div>
            )}

            {isEditModelDisplayed && (
                <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-center items-center">
                    <div className="relative bg-white w-[500px] max-w-[90%] max-h-[90%] rounded-lg shadow-lg p-6">

                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-red-600"
                            onClick={() => setEditModelDisplayed(false)}
                        >
                            <CircleX size={24}/>
                        </button>
                        <EditStudentPage onClose={()=>{
                            setEditModelDisplayed(false);
                            setLoaded(false);
                        }}/>
                    </div>
                </div>
            )}
        </div>
    );
}
