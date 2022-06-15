import React, {useCallback, useState} from 'react';
import "../../pages/AdminProfilePage"
import {deleteRequest, post} from "../../utils/http";
import EditCourtModal from "./EditCourtModal"

const ProfileCourtCard = ({court: {name, sport, location, description, price, openHour,closeHour}}) => {


    return (

        <div className="card w-50">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <div>
                    <h5 className="card-subtitle mb-2 text-muted">Sport: {sport}</h5>
                    <h5 className="card-subtitle mb-2 text-muted">Price p/h: {price}</h5>
                    <h4 className="card-subtitle mb-2 text-muted">Open: {openHour} hs / Close: {closeHour} hs  </h4>
                    <h6 className="card-text mb-2 text-muted">Description: {description}</h6>
                </div>
                {<div className="btn btn-success">Reserve</div>}
                {<div className="btn btn-success">View free hours</div>}
            </div>
        </div>

    );

}

export default ProfileCourtCard
