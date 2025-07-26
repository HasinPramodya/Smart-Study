import DataTable from "../component/dataTable.jsx";
import StickyHeadTable from "../component/dataTable.jsx";
import FloatingActionButtonSize from "../component/actionButton.jsx";
import BottomNavigation from "../component/bottomNavigation.jsx";



export default function ViewCoursePage() {
    return(
        <>
            <div className="container mx-auto  flex flex-col items-center justify-center ">
                <h1 className="text-3xl font-bold ">
                     Courses
                </h1>

                <StickyHeadTable className="mb-[50px]"/>
                <FloatingActionButtonSize/>


            </div>
        </>
    )
}