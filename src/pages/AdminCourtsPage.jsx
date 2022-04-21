import React from 'react';
import NavBar from "../componentts/NavBar";
import './AdminCourtsPage.css'
import AdminCourts from "../componentts/AdminCourts";

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