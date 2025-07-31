export default function CourseDetail({ student, onClose }) {

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">Course Details</h2>
            {
                student.course_details.map((course, index) => (
                    <div key={index} className="border p-4 rounded shadow-md bg-gray-50">
                        <h3 className="text-xl font-semibold">{course.courseName}</h3>
                        <p><strong>Course ID:</strong> {course.courseId}</p>
                        <p><strong>Grade:</strong> {course.grade}</p>
                        <p><strong>Marks:</strong> {course.marks}</p>
                        <p><strong>Registration Date:</strong> {new Date(course.reg_date).toLocaleDateString()}</p>
                    </div>
                ))
            }

            <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                onClick={onClose}
            >
                Close
            </button>
        </div>
    );

}