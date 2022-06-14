import React from 'react';
import NavBar from "../Components/Admin/NavBar";
import './AdminCourtsPage.css'
import AdminCourts from "../Components/Admin/AdminCourts";

export const AdminCourtsPage = () =>{

    return (
        <div className="adminHome">
            <div><NavBar/></div>
            <div>
                <AdminCourts/>
            </div>
        </div>
    );

}