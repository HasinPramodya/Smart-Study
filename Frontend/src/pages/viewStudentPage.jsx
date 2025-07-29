import { useState, useEffect } from "react";
import axios from "axios";
import CircularIndeterminate from "../component/loader.jsx";
import { Trash2, Pencil } from "lucide-react";


export default function ViewStudentPage() {
    const [students, setStudents] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [isModelOpen, setIsModelOpen] = useState(false);

    useEffect(() => {
        if (!loaded) {
            axios.get(import.meta.env.VITE_BACKEND_URL + "/api/student")
                .then((res) => {
                    setStudents(res.data.Students);
                    console.log(res.data.Students);
                    setLoaded(true);
                })
                .catch((err) => {
                    console.log(err.response.error);
                });
        }
    }, [loaded]);


    return (
        <>
            <div className="w-full h-screen rounded-xl flex justify-center items-center">
                { loaded && <table>
                    <thead>
                    <tr>
                        <th className="p-2 m-6">Student RegNo.</th>
                        <th className="p-2 m-6">Name</th>
                        <th className="p-2 m-6">Address</th>
                        <th className="p-2 m-6">Email</th>
                        <th className="p-2 m-6">Phone No</th>
                        <th className="p-2 m-6">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {students.map((student) => (
                        <tr
                            key={student.regNo}
                            className="border-b-2 border-gray-300 hover:bg-gray-100"
                        >
                            <td className="p-2 m-6">{student.regNo}</td>
                            <td className="p-2 m-6">{student.name}</td>
                            <td className="p-2 m-6">{student.address}</td>
                            <td className="p-2 m-6">{student.email}</td>
                            <td className="p-2 m-6">{student.phoneNo}</td>
                            <td className="p-2 m-6">
                                <div className="w-full h-full flex justify-between">
                                    <Trash2 className="text-[20px] m-[5px] hover:text-red-600" onClick={()=>{
                                        deletestudent(student.regNo)
                                    }}></Trash2>
                                    <Pencil className="text-[20px] m-[5px] hover:text-green-600"onClick={()=>{
                                        navigate("/admin/editstudent",{
                                            state: student,

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
    );
}