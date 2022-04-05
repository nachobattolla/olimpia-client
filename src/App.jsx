import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {LoginPage} from "./pages/LoginPage";
import {RegisterPage} from "./pages/RegisterPage";

function App() {
    return(
        <div>
            <Router>
                <Routes>
                    <Route exact path="/login" element={<LoginPage/>} />
                    <Route exact path="/register" element={<RegisterPage/>} />
                    <Route exact path="/home" element={<RegisterPage/>} />
                    <Route exact path="/adminHome" element={<RegisterPage/>} />
                </Routes>
            </Router>
        </div>
    )

}

export default App;
