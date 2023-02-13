import React from 'react';
import "./AdminProfile";
import "../../pages/AdminProfilePage"
import logo from "../../resources/logo.png";
import {BiLogOut, BiUserCircle} from "react-icons/bi";
import {GiSoccerField} from "react-icons/gi";
import {VscRequestChanges} from "@react-icons/all-files/vsc/VscRequestChanges";
import {post} from "../../utils/http";



const NavBar = () => {

    const logOut = () => {
        localStorage.removeItem('isLogged')
        localStorage.removeItem('isAdmin')
        post("olimpia/logout/", {}, {options: {withCredentials: true}}).then(r =>{
            localStorage.clear()
        } )
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="border-0">
                        <img src={logo} width='80'className="m-3"/>
                    </button>
                    <div>
                        <a className="navbar-brand rounded-pill border-end border-success border-5 shadow-sm btn-outline-success" href="/adminHome/myReserves"><VscRequestChanges size={35}/></a>
                        <a className="navbar-brand rounded-pill border-end border-success border-5 shadow-sm btn-outline-success" href="/adminHome/courts"><GiSoccerField size={40}/></a>
                        <a className="navbar-brand rounded-pill border-end border-success border-5 shadow-sm btn-outline-success" href="/adminHome/profile"><BiUserCircle size={40}/></a>
                        <a className="navbar-brand rounded-pill border-end border-success border-5 shadow-sm btn-outline-success" href="/" onClick={logOut}><BiLogOut size={40}/></a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;