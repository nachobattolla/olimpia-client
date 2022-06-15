import React, {useEffect, useState} from 'react';
import "../../pages/AdminProfilePage"
import './AdminProfile.css'
import MailIcon from '@mui/icons-material/Mail';
import {AiTwotonePhone} from "@react-icons/all-files/ai/AiTwotonePhone";
import {get} from "../../utils/http";
import ProfileCourtCard from "./ProfileCourtCard";
import EditCourtModal from "./EditCourtModal";
import EditProfileModal from "./EditProfileModal";

const AdminProfile = () => {

    const [courts, setCourts] = useState([])
    const [refresh, setRefresh] = useState(true)
    const [refreshProfile, setRefreshProfile] = useState(true)
    const [adminUsername, setAdminUsername] = useState("")
    const [adminEmail, setAdminEmail] = useState("")
    const [adminPhone, setAdminPhone] = useState("")


    useEffect(()=> {
        get('adminDashboard/my-courts', {options: {withCredentials: true}}).then(
            data=>{
                console.log(data)
                setCourts(data || [])
                console.log(courts)
            })
    }, [refresh])

    useEffect(() => {
        get('adminDashboard/profile', {options: {withCredentials: true}})
            .then((data) => {
                console.log(data)
                setAdminUsername(data.username);
                setAdminEmail(data.email)
                setAdminPhone(data.phone)
            })
    }, [refreshProfile])

    // let userMode = false;
    return (
        <div className="Profile">
            <header className="Profile-header">
                <div className="content-profile">
                    <div className="profile-box">
                        <div className="h1"> {adminUsername}'s Establishment  </div>
                        <div className="col-form-label"> <MailIcon/> : {adminEmail} </div>
                        <div className="col-form-label"> <AiTwotonePhone/> : {adminPhone} </div>
                        {/*{!userMode}&&*/ <EditProfileModal adminData={{adminUsername, adminEmail, adminPhone}} onEditProfile={() => {setRefreshProfile(!refreshProfile)}} />}
                    </div>
                    <div className= "courtsBox">
                        <label className="justify-content-center">RENT A COURT</label>
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