import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
export default function AddCoursePage({onClose}) {

    const [courseName, setCourseName] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [isAddModelDisplayed, setAddModelDisplayed] = useState(false);

    function handleAddCourse() {
        axios.post(import.meta.env.VITE_BACKEND_URL + "/api/course", {
            name: courseName,
            description: courseDescription
        }).then(
            (res)=>{
                console.log(res.data);
                toast.success("Course added successfully");
                onClose();
            }
        ).catch(
            (error)=>{
                console.log(error.response.message);
                toast.error("Something went wrong, please try again");
            }
        )
    }

    return (
        <>
            <div className="container mx-auto flex flex-col items-center justify-center ">
                <h1 className="text-3xl font-bold mb-[50px]">
                    Add Course
                </h1>

                <form className="w-full max-w-lg">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseName">
                            Course Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="courseName" type="text" placeholder="Course Name" onChange={ (e)=>{
                            setCourseName(e.target.value)
                        }}/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseDescription">
                            Course Description
                        </label>
                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="courseDescription" placeholder="Course Description" onChange={(e)=>{
                            setCourseDescription(e.target.value)
                        }}></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={()=>{
                            handleAddCourse();
                            setAddModelDisplayed(false);
                        }}>
                            Add Course
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}