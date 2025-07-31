import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ViewCoursePage from "./pages/viewCoursePage.jsx";
import ViewStudentPage from "./pages/viewStudentPage.jsx";
import DashboardPage from "./component/dashboard.jsx";
import Error from "./component/errorPage.jsx";
import ResponsiveAppBar from "./component/appbar.jsx";

function App() {


    return (
        <>

            <BrowserRouter>
                <div className="w-full h-[150px] min-h-[150px]  flex justify-center items-center">
                    <ResponsiveAppBar/>
                </div>
                <Routes path="/*">
                    <Route path="/" element={<DashboardPage/>}></Route>
                    <Route path="/course" element={<ViewCoursePage/>}></Route>
                    <Route path="/student" element={<ViewStudentPage/>}></Route>
                    <Route path="/*" element={<Error/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
