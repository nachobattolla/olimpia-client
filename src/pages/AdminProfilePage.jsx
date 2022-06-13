import React from 'react';
import AdminProfile from "../componentts/Admin/AdminProfile";
import adminHomeStyle from './AdminProfilePage.css'
import NavBar from "../componentts/Admin/NavBar";

export const AdminProfilePage = () =>{

    return (
        <div className="adminHome">
            <header><NavBar/></header>
            <AdminProfile/>
        </div>
    );

}