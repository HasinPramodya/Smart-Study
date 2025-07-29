import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {Pencil, Trash2} from "lucide-react";
import CircularIndeterminate from "../component/loader.jsx";

export default function ViewCoursePage() {
    const [courses, setCourses] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [isModelDisplayed, setModelDisplayed] = useState(false);
    useEffect(()=>{
        if(!loaded){
            axios.get(import.meta.env.VITE_BACKEND_URL + "/api/course").then((res) => {
                setCourses(res.data.Courses);
                setLoaded(true);
            }).catch((err) => {
                console.log(err.response.data);
            });
        }
    })
    return(
        <>
            <div className="w-full h-screen rounded-xl flex justify-center items-center">
                { loaded && <table>
                    <thead>
                    <tr>
                        <th className="p-2 m-6">Course Id</th>
                        <th className="p-2 m-6">Name</th>
                        <th className="p-2 m-6">Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {courses.map((course) => (
                        <tr
                            key={course.regNo}
                            className="border-b-2 border-gray-300 hover:bg-gray-100"
                        >
                            <td className="p-2 m-6">{course.courseId}</td>
                            <td className="p-2 m-6">{course.name}</td>
                            <td className="p-2 m-6">{course.description}</td>
                            <td className="p-2 m-6">
                                <div className="w-full h-full flex justify-between">
                                    <Trash2 className="text-[20px] m-[5px] hover:text-red-600" onClick={()=>{
                                        deletecourses(course.regNo)
                                    }}></Trash2>
                                    <Pencil className="text-[20px] m-[5px] hover:text-green-600"onClick={()=>{
                                        navigate("/admin/editcourses",{
                                            state: course,

                                        });
                                    }}></Pencil>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table> }
                {
                    ! loaded && <CircularIndeterminate/>
                }
            </div>
        </>
    )
}