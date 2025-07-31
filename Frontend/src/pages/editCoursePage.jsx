import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function EditCoursePage({ onClose, course }) {
    const [courseName, setCourseName] = useState('');
    const [courseDescription, setCourseDescription] = useState('');

    useEffect(() => {
        if (course) {
            setCourseName(course.name || '');
            setCourseDescription(course.description || '');
        }
    }, [course]);

    function handleEditCourse() {
        axios.put(import.meta.env.VITE_BACKEND_URL + "/api/course/" + course.courseId, {
            name: courseName,
            description: courseDescription
        }).then(
            (res) => {
                toast.success("Course updated successfully");
                onClose();
            }
        ).catch(
            (error) => {
                console.log(error?.response?.data?.message || error.message);
                toast.error("Something went wrong, please try again");
            }
        );
    }

    return (
        <div className="container mx-auto flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-[30px]">Edit Course</h1>

            <form className="w-full max-w-lg">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseName">
                        Course Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="courseName"
                        type="text"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseDescription">
                        Course Description
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="courseDescription"
                        value={courseDescription}
                        onChange={(e) => setCourseDescription(e.target.value)}
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={handleEditCourse}
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
}
