import {useState, useEffect} from "react";
import axios from "axios";
import {CircleX, Pencil, Trash2} from "lucide-react";
import CircularIndeterminate from "../component/loader.jsx";
import FloatingActionButtonSize from "../component/actionButton.jsx";
import AddCoursePage from "./addCoursePage.jsx";
import {useNavigate} from "react-router-dom";
import EditCoursePage from "./editCoursePage.jsx";

export default function ViewCoursePage() {
    const [courses, setCourses] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [isAddModelDisplayed, setaddModelDisplayed] = useState(false);
    const [isEditModelDisplayed, setEditModelDisplayed] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!loaded) {
            axios.get(import.meta.env.VITE_BACKEND_URL + "/api/course")
                .then((res) => {
                    setCourses(res.data.Courses);
                    setLoaded(true);
                })
                .catch((err) => {
                    console.log(err?.response?.data || err.message);
                });
        }
    }, [loaded]);

    function deleteCourse(courseId) {
        axios.delete(import.meta.env.VITE_BACKEND_URL + "/api/course/" + courseId)
            .then(() => setLoaded(false))
            .catch((err) => console.log(err?.response?.data || err.message));
    }

    return (
        <div className="w-full h-screen flex justify-center items-center relative">
            {loaded && (
                <table
                    className="table-auto border-collapse border border-gray-300 shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-100">
                    <tr>
                        <th className="p-3 border">Course Id</th>
                        <th className="p-3 border">Name</th>
                        <th className="p-3 border">Description</th>
                        <th className="p-3 border">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {courses.map((course) => (
                        <tr
                            key={course.courseId}
                            className="border-t hover:bg-gray-50"
                        >
                            <td className="p-3 border">{course.courseId}</td>
                            <td className="p-3 border">{course.name}</td>
                            <td className="p-3 border">{course.description}</td>
                            <td className="p-3 border">
                                <div className="flex gap-3 justify-center">
                                    <Trash2
                                        className="text-red-500 hover:text-red-700 cursor-pointer"
                                        onClick={() => deleteCourse(course.courseId)}
                                    />
                                    <Pencil
                                        className="text-green-500 hover:text-green-700 cursor-pointer"
                                        onClick={() => {
                                            setEditModelDisplayed(true)
                                        }
                                        }
                                    />
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}

            {!loaded && <CircularIndeterminate/>}


            <div className="fixed bottom-5 right-5">
                <FloatingActionButtonSize
                    onClick={() => setaddModelDisplayed(true)}
                />
            </div>


            {isAddModelDisplayed && (
                <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-center items-center">
                    <div className="relative bg-white w-[500px] max-w-[90%] max-h-[90%] rounded-lg shadow-lg p-6">

                        <button
                            className="absolute top-3 right-3 text-gray-500 hover:text-red-600"
                            onClick={() => setaddModelDisplayed(false)}
                        >
                            <CircleX size={24}/>
                        </button>


                        <AddCoursePage onClose={() => {
                            setaddModelDisplayed(false);
                            setLoaded(false);
                        }}/>
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
                        <EditCoursePage onClose={()=>{
                            setEditModelDisplayed(false);
                            setLoaded(false);
                        }}/>
                    </div>
                </div>
            )}
        </div>
    );
}
