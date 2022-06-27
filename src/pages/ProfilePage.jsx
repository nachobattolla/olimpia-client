import React from 'react';
import AdminProfile from "../Components/Admin/AdminProfile";
import adminHomeStyle from './AdminProfilePage.css'
import NavBar from "../Components/User/NavBarClient";
import Profile from "../Components/User/Profile";
const ProfilePage = () =>{

    return (
        <div className="adminHome">
            <header><NavBar/></header>
            <Profile/>
        </div>
    );

}
export default ProfilePage;