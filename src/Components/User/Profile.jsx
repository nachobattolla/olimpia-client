import React, {useEffect, useState} from "react";
import {get} from "../../utils/http";
import MailIcon from "@mui/icons-material/Mail";
import {AiTwotonePhone} from "@react-icons/all-files/ai/AiTwotonePhone";
import EditProfileModal from "../Admin/EditProfileModal";
import PersonIcon from '@mui/icons-material/Person';

const Profile= ()=>{
    const [refreshProfile, setRefreshProfile] = useState(true)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")


    useEffect(() => {
        get('dashboard/profile', {options: {withCredentials: true}})
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
                            <div className='username-edit-container'>
                            <div> <PersonIcon/> {username} </div>
                            {/*{!userMode}&&*/ <EditProfileModal data={{username, email, phone}} onEditProfile={() => {setRefreshProfile(!refreshProfile)} } />}
                        </div>
                        <div style={{display:'block', justifyContent:"start", textAlign: "start"}}>
                            <div style={{marginBottom:'10px'}}> <MailIcon/> : {email} </div>
                            <div> <AiTwotonePhone/> : {phone} </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );

}
export  default Profile