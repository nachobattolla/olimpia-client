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
                <div className="content-profile">
                    <div className="profile-box">
                        <div className='username-edit-container'>
                        <div></div>
                        <div className="h1"> {username}'s Establishment  </div>
                        {/*{!userMode}&&*/ <EditProfileModal data={{username, email, phone}} onEditProfile={() => {setRefreshProfile(!refreshProfile)}} />}
                        </div>
                        <div style={{display:'block', justifyContent:"start", textAlign: "start", padding: '20px', marginLeft:'30px' }}>
                            <div style={{marginBottom:'10px'}}> <MailIcon/> : {email} </div>
                            <div> <AiTwotonePhone/> : {phone} </div>
                        </div>
                    </div>
                    <div className='title-courts-container'>
                        <label className='title-profile'>COURTS</label>
                        <div className= "courtsBoxProfile">
                            {
                                courts.map((el)=> <ProfileCourtCard court={el} isAdmin = {true}/>)
                            }
                        </div>
                    </div>
                </div>
        </div>
    );

}

export default AdminProfile