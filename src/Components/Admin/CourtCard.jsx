import React, {useCallback, useState} from 'react';
import "../../pages/AdminProfilePage"
import {deleteRequest, post} from "../../utils/http";
import EditCourtModal from "./EditCourtModal"

const CourtCard = ({court: {name, sport, location, description, price,openHour,closeHour}, onDeleteCourt, onEditCourt, userMode}) => {

    const onDelete = useCallback(()=> {
        deleteRequest('adminDashboard/delete-court', {name}, {options: {withCredentials: true}}).then(()=> {
            onDeleteCourt()
        })
    })


    return (
        <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <div>
                        <h6 className="card-subtitle mb-2 text-muted">Sport: {sport}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">Price per Hour: {price}</h6>
                    </div>
                    <p className="card-text">Description: {description}</p>
                    <p className="card-title">Open Hour: {openHour}</p>
                    <p className="card-title">Close Hour: {closeHour}</p>
                    {!userMode && <a href="#" className="btn btn-success" onClick={onDelete}>Delete</a>}
                    {/*<a href="#" className="btn btn-success">Edit</a>*/}
                    {!userMode && <EditCourtModal courtData={{name, sport, location, description, price,openHour,closeHour}} onEdit={onEditCourt} />}
                    {userMode && <div className="btn btn-success">View Establishment</div>}
                    {userMode && <div className="btn btn-success">Reserve</div>}
                </div>
        </div>
    );

}

export default CourtCard
