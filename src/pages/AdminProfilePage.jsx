import React from 'react';
import AdminProfile from "../Components/Admin/AdminProfile";
import adminHomeStyle from './AdminProfilePage.css'
import NavBar from "../Components/Admin/NavBar";

export const AdminProfilePage = () =>{

    return (
        <div className="adminHome">
            <header><NavBar/></header>
            <AdminProfile/>
        </div>
    );

}