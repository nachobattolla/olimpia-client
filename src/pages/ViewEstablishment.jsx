import {useParams} from "react-router-dom";
import {get, post} from "../utils/http";
import React, {useEffect, useState} from "react";
import NavBarClient from "../Components/User/NavBarClient";
import MailIcon from "@mui/icons-material/Mail";
import {AiTwotonePhone} from "@react-icons/all-files/ai/AiTwotonePhone";
import EditProfileModal from "../Components/Admin/EditProfileModal";
import ProfileCourtCard from "../Components/Admin/ProfileCourtCard";

export const ViewEstablishment = ()=>{
    const{id} = useParams()
    const [admin, setAdmin]= useState({})
    const [courts, setCourts]= useState([])
    const [refreshProfile, setRefreshProfile] = useState(true)


    post('dashboard/establishment', {id}, {options: {withCredentials: true}}).then(admin =>{
        setAdmin(admin)
    })

    useEffect(()=> {
        get('adminDashboard/my-courts', {options: {withCredentials: true}}).then(
            data=>{
                console.log(data)
                setCourts(data || [])
                console.log(courts)
            })
    }, [])

    console.log(courts)

    return(
        <div>
            <NavBarClient></NavBarClient>
            <div className="Profile">
                <header className="Profile-header">
                    <div className="content-profile">
                        <div className="profile-box">
                            <div className="h1"> {admin.username}'s Establishment  </div>
                            <div className="col-form-label"> <MailIcon/> : {admin.email} </div>
                            <div className="col-form-label"> <AiTwotonePhone/> : {admin.phone} </div>
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
        </div>
    )
}