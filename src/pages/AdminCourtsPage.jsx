import React from 'react';
import NavBar from "../componentts/Admin/NavBar";
import './AdminCourtsPage.css'
import AdminCourts from "../componentts/Admin/AdminCourts";

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