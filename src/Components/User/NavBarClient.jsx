import React, {useCallback, useEffect, useState} from 'react';
import "../Admin/AdminProfile";
import "../../pages/AdminProfilePage"
import logo from "../../resources/logo.png";
import {BiLogOut, BiUserCircle} from "react-icons/bi";
import {GiSoccerField} from "react-icons/gi";
import {VscRequestChanges} from "@react-icons/all-files/vsc/VscRequestChanges";
import {get, post} from "../../utils/http";
import {useParams} from "react-router-dom";
import {Badge} from "@mui/material";

const NavBarHome = () => {

    const [count, setCount] = React.useState(0);

    const [balance ,setBalance]= useState(0)
    const logOut = () => {
        localStorage.removeItem('isLogged')
        localStorage.removeItem('isAdmin')
        post("olimpia/logout/", {}, {options: {withCredentials: true}}).then(r =>{
                   } )
    }
    const {status} = useParams()

    useEffect(()=>{
            if (status === 'success'){
                const  newBalance = localStorage.getItem("balance")
                newBalance &&
                post('dashboard/editProfile',{balance:newBalance} , {options: {withCredentials: true}}).then(()=> {
                    setBalance(Number(newBalance))
                    localStorage.removeItem("balance")
                })
            }

        }
        , [status])
    useEffect(()=>{
        get("dashboard/getBalance",{options: {withCredentials: true}}).then(r => {
            setBalance(r.balance)
        })
    },[])

    useEffect(()=> {
        get('dashboard/myReservations',{options: {withCredentials: true}}).then(
            data=>{
                let auxCounter = 0
                data.map(r => {
                    if (r.hasntUserSeen){
                        auxCounter++
                    }
                })
                setCount(auxCounter)
            })
    },[])

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="border-0">
                        <img src={logo} width='80'className="m-3"/>
                        <a href="/home"/>
                    </button>
                    <div>
                        <a className="navbar-brand" href="#"> Your Balance: ${balance}</a>
                        <a className="navbar-brand rounded-pill border-end border-success border-5 shadow-sm btn-outline-success" href="/home/myReserves">
                            <Badge color="success" badgeContent={count}>
                                <VscRequestChanges size={35}/>
                            </Badge>
                        </a>
                        <a className="navbar-brand rounded-pill border-end border-success border-5 shadow-sm btn-outline-success" href="/home">
                            <GiSoccerField size={40}/>
                        </a>
                        <a className="navbar-brand rounded-pill border-end border-success border-5 shadow-sm btn-outline-success" href="/home/profile">
                            <BiUserCircle size={40}/>
                        </a>
                        <a className="navbar-brand rounded-pill border-end border-success border-5 shadow-sm btn-outline-success" href="/" onClick={logOut}>
                            <BiLogOut size={40}/>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBarHome;