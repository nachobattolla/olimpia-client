import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {LoginPage} from "./pages/LoginPage";
import {RegisterPage} from "./pages/RegisterPage";
import {AdminHomePage} from "./pages/AdminHomePage";
import {HomePage} from "./pages/HomePage";

function App() {
    return(
        <div>
            <Router>
                <Routes>
                    <Route exact path="/login" element={<LoginPage/>} />
                    <Route exact path="/register" element={<RegisterPage/>} />
                    <Route exact path="/home" element={<HomePage/>} />
                    <Route exact path="/adminHome" element={<AdminHomePage/>} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;
