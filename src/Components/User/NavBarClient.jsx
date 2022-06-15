import React, {useCallback} from 'react';
import "../Admin/AdminProfile";
import "../../pages/AdminProfilePage"
import logo from "../../resources/logo.png";
import {BiLogOut, BiUserCircle} from "react-icons/bi";
import {GiSoccerField} from "react-icons/gi";
import {VscRequestChanges} from "@react-icons/all-files/vsc/VscRequestChanges";

const NavBarHome = () => {

    const logOut = () => {
        localStorage.clear()
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="border-0">
                        <img src={logo} width='80'className="m-3"/>
                        <a href="/home"/>
                    </button>
                    <div>
                        <a className="navbar-brand rounded-pill border-end border-success border-5 shadow-sm btn-outline-success" href="/home/myReserves"><VscRequestChanges size={35}/></a>
                        <a className="navbar-brand rounded-pill border-end border-success border-5 shadow-sm btn-outline-success" href="/home"><GiSoccerField size={40}/></a>
                        <a className="navbar-brand rounded-pill border-end border-success border-5 shadow-sm btn-outline-success" href="/home/profile"><BiUserCircle size={40}/></a>
                        <a className="navbar-brand rounded-pill border-end border-success border-5 shadow-sm btn-outline-success" href="/login" onClick={logOut}><BiLogOut size={40}/></a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBarHome;