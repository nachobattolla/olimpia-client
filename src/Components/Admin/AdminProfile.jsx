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
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")


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
                setUsername(data.username);
                setEmail(data.email)
                setPhone(data.phone)
            })
    }, [refreshProfile])

    // let userMode = false;
    return (
        <div className="Profile">
            <header className="Profile-header">
                <div className="content-profile">
                    <div className="profile-box">
                        <div className="h1"> {username}'s Establishment  </div>
                        <div className="col-form-label"> <MailIcon/> : {email} </div>
                        <div className="col-form-label"> <AiTwotonePhone/> : {phone} </div>
                        {/*{!userMode}&&*/ <EditProfileModal data={{username, email, phone}} onEditProfile={() => {setRefreshProfile(!refreshProfile)}} />}
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