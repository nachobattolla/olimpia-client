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
import {MakeReserve2} from "./pages/MakeReserve2"
import {useEffect} from "react";
import MyReservations from "./pages/MyReservations";
import ProfilePage from "./pages/ProfilePage";
import Payment from './pages/Payment';
function App() {
    useEffect(()=>{})
    return(
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<LoginPage/>} />
                    <Route exact path="/register" element={<RegisterPage/>} />
                    <Route exact path="/home" element={<HomePage/>} />
                    <Route exact path="/adminHome/profile" element={<AdminProfilePage/>} />
                    <Route exact path="/home/profile" element={<ProfilePage/>} />
                    <Route exact path="/adminHome/courts" element={<AdminCourtsPage/>} />
                    <Route exact path="/test" element={<Test/>} />
                    <Route exact path = "/adminHome/myReserves" element={<PendingReserves/>}/>
                    <Route exact path= "/:id" element={<ViewEstablishment/>}/>
                    <Route exact path= "/payment/:id" element={<Payment/>}/>
                    <Route exact path="/reserve/:courtId" element={<MakeReserve2/>}/>
                    <Route exact path = "/home/myReserves" element={<MyReservations/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;
