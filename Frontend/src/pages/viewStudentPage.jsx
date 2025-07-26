import StickyHeadTable from "../component/dataTable.jsx";
import FloatingActionButtonSize from "../component/actionButton.jsx";


export default function ViewStudentPage() {
    return (
        <>
            <div className="container mx-auto flex flex-col items-center justify-center ">
                <h1 className="text-3xl font-bold mb-[50px]">
                     Students
                </h1>

                <StickyHeadTable className="mt-[50px]"/>
                <FloatingActionButtonSize/>


            </div>
        </>
    );
}