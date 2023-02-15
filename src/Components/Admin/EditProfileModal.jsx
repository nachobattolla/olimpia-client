import React, {useCallback, useEffect, useState} from 'react';
import "../../pages/AdminCourtsPage"
import {get, post} from "../../utils/http";
import {FaUserEdit} from "@react-icons/all-files/fa/FaUserEdit";
import {toast} from "react-toastify";

const EditProfileModal  = ({data,onEditProfile}) => {

    const [username, setUsername] = useState(data.username)
    const [email, setEmail] = useState(data.email)
    const [phone, setPhone] = useState(data.phone)

    useEffect(()=>{
        setUsername(data.username)
        setEmail(data.email)
        setPhone(data.phone)
    },[data])
    const editedProfile = () => {
        toast.success('Editaste tu perfil!');
    }

    const onClick = useCallback(()=> {  //falta el end point
        const newData = {username, email, phone}
        post('dashboard/editProfile',{newData} , {options: {withCredentials: true}}).then(()=> {
            onEditProfile(newData)
            console.log( "newData: "+ newData)
            editedProfile()
        })
        this.hide();
    })

    return (
        <>
            <div className="btn rounded-pill btn-outline-success bg-primary pe-5" data-bs-toggle="modal" data-bs-target="#new-edit-modal" >
                <FaUserEdit/>
            </div>
            <div className="modal fade" id="new-edit-modal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">EDIT PROFILE</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <label> Username </label>
                            <input className="form-control" value={username} onChange={(event)=>setUsername(event.target.value)}/>
                            <label> Email </label>
                            <input className="form-control" value={email} onChange={(ev)=> setEmail(ev.target.value)}/>
                            <label> Phone </label>
                            <input className="form-control" value={phone} onChange={(ev)=>setPhone(ev.target.value)}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success" onClick={onClick} data-bs-dismiss="modal">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default EditProfileModal;