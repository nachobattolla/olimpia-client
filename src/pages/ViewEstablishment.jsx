import {useParams} from "react-router-dom";
import {post} from "../utils/http";
import {useState} from "react";

export const ViewEstablishment = ()=>{
    const{id} = useParams()
    const [admin, setAdmin]= useState({})
    const [courts, setCourts]= useState({})
    post('dashboard/establishment', {id}, {options: {withCredentials: true}}).then(admin =>{
        setAdmin(admin)
    })

    post('dashboard/adminCourts', {id}, {options: {withCredentials: true}}).then(courts =>{
        setCourts(courts)
    })

    return(
        <div>
            <h1>{admin.username}</h1>
        </div>
    )
}