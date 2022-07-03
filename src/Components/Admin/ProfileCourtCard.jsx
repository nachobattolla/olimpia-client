import React, {useCallback, useState} from 'react';
import "../../pages/AdminProfilePage"
import {deleteRequest, post} from "../../utils/http";
import EditCourtModal from "./EditCourtModal"
import {useNavigate} from "react-router-dom";

const ProfileCourtCard = ({court: {name, sport, location, description, price, openHour,closeHour,_id},isAdmin}) => {
    let navigate = useNavigate();

    return (

        <div className="card w-50">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <div>
                    <h5 className="card-subtitle mb-2 text-muted">Sport: {sport}</h5>
                    <h5 className="card-subtitle mb-2 text-muted">Price p/h: {price}</h5>
                    <h6 className="card-text mb-2 text-muted">Description: {description}</h6>
                </div>

                {   isAdmin?<></>:
                    <div  h="#" a="./" className="btn btn-success" onClick={()=>{navigate(`/reserve/${_id}`)}}>Reserve</div>
                }
            </div>
        </div>

    );

}

export default ProfileCourtCard
