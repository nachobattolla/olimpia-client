import React, {useEffect, useState} from "react";
import {get} from "../../utils/http";
import MailIcon from "@mui/icons-material/Mail";
import {AiTwotonePhone} from "@react-icons/all-files/ai/AiTwotonePhone";
import EditProfileModal from "../Admin/EditProfileModal";
import ProfileCourtCard from "../Admin/ProfileCourtCard";

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
                        <div className="h1"> {username}  </div>
                        <div className="col-form-label"> <MailIcon/> : {email} </div>
                        <div className="col-form-label"> <AiTwotonePhone/> : {phone} </div>
                        {/*{!userMode}&&*/ <EditProfileModal data={{username, email, phone}} onEditProfile={() => {setRefreshProfile(!refreshProfile)} } />}
                    </div>
                </div>
            </header>
        </div>
    );

}
export  default Profile