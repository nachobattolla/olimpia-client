import React, {useCallback, useState} from 'react';
import "../pages/AdminProfilePage"
import {deleteRequest, post} from "../utils/http";
import EditCourtModal from "./EditCourtModal"

const CourtCard = ({court: {name, sport, location, description, price}, onDeleteCourt, onEditCourt, userMode}) => {
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
                        <h6 className="card-subtitle mb-2 text-muted">{sport}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">{price}</h6>
                    </div>
                    <p className="card-text">{description}</p>
                    {!userMode && <a href="#" className="btn btn-success" onClick={onDelete}>Delete</a>}
                    {/*<a href="#" className="btn btn-success">Edit</a>*/}
                    {!userMode && <EditCourtModal courtData={{name, sport, location, description, price}} onEdit={onEditCourt} />}
                </div>
        </div>
    );

}

export default CourtCard
