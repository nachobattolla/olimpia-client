import React from 'react';
import AdminProfile from "../componentts/AdminProfile";
import adminHomeStyle from './AdminProfilePage.css'
import NavBar from "../componentts/NavBar";

export const AdminProfilePage = () =>{

    return (
        <div className="adminHome">
            <header><NavBar/></header>
            <AdminProfile/>
        </div>
    );

}