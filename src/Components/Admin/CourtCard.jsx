import React, {useCallback, useEffect, useState} from 'react';
import "../../pages/AdminProfilePage"
import {deleteRequest, post} from "../../utils/http";
import EditCourtModal from "./EditCourtModal"
import {useNavigate} from "react-router-dom";



const CourtCard = ({court: {adminId,name, sport, location,address, description, price,reserves:{
    Monday:{
        openHour:openHourMon,
        closeHour: closeHourMon
    },
    Tuesday:{
        openHour: openHourTue,
        closeHour: closeHourTue
    },
    Wednesday:{
        openHour: openHourWed,
       closeHour: closeHourWed
    },
    Thursday:{
        openHour: openHourThur,
        closeHour: closeHourThur
    },
    Friday:{
       openHour: openHourFri,
        closeHour: closeHourFri
    },
    Saturday:{
        openHour: openHourSat,
        closeHour: closeHourSat,
    },
    Sunday:{
        openHour:openHourSun,
       closeHour: closeHourSun,
    }
},_id}, onDeleteCourt, onEditCourt, userMode}) => {
    let navigate = useNavigate();
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
                    {!userMode && <a href="#" className="btn btn-success" onClick={onDelete}>Delete</a>}
                    {/*<a href="#" className="btn btn-success">Edit</a>*/}
                    {!userMode && <EditCourtModal courtData={{name, sport, location,address, description, price,openHourMon,closeHourMon,openHourTue,closeHourTue,openHourWed,closeHourWed,openHourThur,closeHourThur,openHourFri,closeHourFri,openHourSat,closeHourSat,openHourSun,closeHourSun,_id}} onEdit={onEditCourt} />}
                    {userMode && <div className="btn btn-success" onClick={()=>{navigate(`/${adminId}`)}}>View Establishment</div>}
                    {userMode && <div className="btn btn-success" onClick={()=>{navigate(`/reserve/${_id}`)}}>Reserve</div>}
                </div>
        </div>
    );

}

export default CourtCard
