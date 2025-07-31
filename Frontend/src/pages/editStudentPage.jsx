import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export default function EditStudentPage({ onClose, student }) {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [courseId, setCourseId] = useState("");
    const [courseName, setCourseName] = useState("");
    const [gradeAchieved, setGradeAchieved] = useState("");
    const [MARKS, setMARKS] = useState("");

    useEffect(() => {
        if (student) {
            setName(student.name || "");
            setAddress(student.address || "");
            setEmail(student.email || "");
            setPhoneNo(student.phoneNo || "");


            const course = student.course_details || {};
            console.log(course);
            setCourseId(course.courseId || "");
            setCourseName(course.courseName || "");
            setGradeAchieved(course.grade || "");
            setMARKS(course.marks || "");
        }
    }, [student]);

    function handleEditStudent() {
        axios
            .put(import.meta.env.VITE_BACKEND_URL + "/api/student/" + student.regNo, {
                name,
                address,
                email,
                phoneNo,
                course_details: {
                    courseId,
                    courseName,
                    grade: gradeAchieved,
                    MARKS,
                },
            })
            .then((res) => {
                toast.success("Student updated successfully");
                onClose();
            })
            .catch((error) => {
                console.log(error?.response?.data?.message || error.message);
                toast.error("Something went wrong, please try again");
            });
    }

    return (
        <div className="h-full overflow-y-auto">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-4">Edit Student</h1>
                <form className="w-full max-w-lg">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="shadow border rounded w-full py-2 px-3"
                            type="text"
                            placeholder="Student Name"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
                        <input
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="shadow border rounded w-full py-2 px-3"
                            type="text"
                            placeholder="Address"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow border rounded w-full py-2 px-3"
                            type="email"
                            placeholder="Email"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Phone No</label>
                        <input
                            value={phoneNo}
                            onChange={(e) => setPhoneNo(e.target.value)}
                            className="shadow border rounded w-full py-2 px-3"
                            type="text"
                            placeholder="Phone Number"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Course ID</label>
                        <input
                            value={courseId}
                            onChange={(e) => setCourseId(e.target.value)}
                            className="shadow border rounded w-full py-2 px-3"
                            type="text"
                            placeholder="Course ID"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Course Name</label>
                        <input
                            value={courseName}
                            onChange={(e) => setCourseName(e.target.value)}
                            className="shadow border rounded w-full py-2 px-3"
                            type="text"
                            placeholder="Course Name"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Grade Achieved</label>
                        <input
                            value={gradeAchieved}
                            onChange={(e) => setGradeAchieved(e.target.value)}
                            className="shadow border rounded w-full py-2 px-3"
                            type="text"
                            placeholder="Grade"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Marks</label>
                        <input
                            value={MARKS}
                            onChange={(e) => setMARKS(e.target.value)}
                            className="shadow border rounded w-full py-2 px-3"
                            type="number"
                            placeholder="Marks"
                        />
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={handleEditStudent}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
