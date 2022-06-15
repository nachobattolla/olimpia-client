import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {LoginPage} from "./pages/LoginPage";
import {RegisterPage} from "./pages/RegisterPage";
import {AdminProfilePage} from "./pages/AdminProfilePage";
import {HomePage} from "./pages/HomePage";
import {Test} from "./pages/Test";
import {AdminCourtsPage} from "./pages/AdminCourtsPage";
import {PendingReserves} from "./pages/PendingReserves";
import {ViewEstablishment} from "./pages/ViewEstablishment"
function App() {
    return(
        <div>
            <Router>
                <Routes>
                    <Route exact path="/login" element={<LoginPage/>} />
                    <Route exact path="/register" element={<RegisterPage/>} />
                    <Route exact path="/home" element={<HomePage/>} />
                    <Route exact path="/adminHome/profile" element={<AdminProfilePage/>} />
                    <Route exact path="/adminHome/courts" element={<AdminCourtsPage/>} />
                    <Route exact path="/test" element={<Test/>} />
                    <Route exact path = "/adminHome/myReserves" element={<PendingReserves/>}/>
                    <Route exact path= "/:id" element={<ViewEstablishment/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;
