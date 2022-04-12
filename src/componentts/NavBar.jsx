import React from 'react';
import "./AdminProfile";
import "../pages/AdminProfilePage"
import logo from "../resources/logo.png";
import {BiUserCircle} from "react-icons/bi";
import {GiSoccerField} from "react-icons/gi";


const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="border-0">
                        <img src={logo} width='80'className="m-3"/>
                    </button>
                    <div>
                        <a className="navbar-brand " href="/adminHome/courts"><GiSoccerField size={40}/></a>
                        <a className="navbar-brand " href="/adminHome/profile"><BiUserCircle size={40}/></a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;