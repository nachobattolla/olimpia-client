import React, {useEffect, useState} from 'react';
import "../../pages/AdminProfilePage"
import './AdminProfile.css'
import MailIcon from '@mui/icons-material/Mail';
import {AiTwotonePhone} from "@react-icons/all-files/ai/AiTwotonePhone";
import CourtCard from "./CourtCard";
import {get} from "../../utils/http";
import ProfileCourtCard from "./ProfileCourtCard";

const AdminProfile = () => {

    const [courts, setCourts] = useState([])
    const [refresh, setRefresh] = useState(true)
    const [adminId, setAdminId] = useState("")


    useEffect(()=> {
        get('adminDashboard/my-courts', {options: {withCredentials: true}}).then(
            data=>{
                console.log(data)
                setCourts(data || [])
                console.log(courts)
            })
    }, [refresh])

    useEffect(()=> {
        get('', {options: {withCredentials: true}}).then(data=>setAdminId(data))
    }, [])


    return (
        <div className="Profile">
            <header className="Profile-header">
                <div className="content-profile">
                    <div className="profile-box">
                        <div className="card-title"> NOMBRE ESTABLECIMIENTO </div>
                        <div className="col-form-label"> <MailIcon/> : </div>
                        <div className="col-form-label"> <AiTwotonePhone/> : </div>
                    </div>
                    <div className= "courtsBox">
                        <label className="justify-content-center">MY COURTS</label>
                        {
                            courts.map((el)=> <ProfileCourtCard court={el}/>)
                        }
                    </div>
                </div>
            </header>
        </div>
    );

}

export default AdminProfile