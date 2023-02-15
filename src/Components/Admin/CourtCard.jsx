import React, {useCallback, useEffect, useState} from 'react';
import "../../pages/AdminProfilePage"
import {deleteRequest, post} from "../../utils/http";
import EditCourtModal from "./EditCourtModal"
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import DeleteIcon from '@mui/icons-material/Delete';

const deletedCourt = () => {
    toast.success('Borraste una cancha!');
}

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
            deletedCourt()
        })
    })


    return (
        <div className="card" style={{maxWidth: '450px', margin: '15px', borderRadius:'25px'}}>
                <div className="card-body" style={{textAlign:"center", width:''}}>
                    <div style={{display: 'flex',justifyContent: 'space-between'}}>
                    <h2 className="card-title" style={{color:"forestgreen"}}>{name}</h2>
                    <div style={{display: 'flex',justifyContent: 'space-between'}}>
                        {!userMode && <EditCourtModal courtData={{name, sport, location,address, description, price,openHourMon,closeHourMon,openHourTue,closeHourTue,openHourWed,closeHourWed,openHourThur,closeHourThur,openHourFri,closeHourFri,openHourSat,closeHourSat,openHourSun,closeHourSun,_id}} onEdit={onEditCourt} />}
                    </div>
                    </div>
                    <p className="card-text" style={{width:''}}>Description: {description}</p>
                    <div style={{textAlign:"left", width:''}}>
                        <h4 className="card-subtitle mb-2 text-muted">Sport: {sport}</h4>
                        <h4 className="card-subtitle mb-2 text-muted">Price per Hour: {price}</h4>
                        <h4  className="card-subtitle mb-2 text-muted">Address: {address}</h4>
                    </div>
                    <div style={{display: 'flex',justifyContent: "space-between"}}>
                    {!userMode && <a href="#" className="btn btn-success" onClick={onDelete}><DeleteIcon/></a>}
                    {/*<a href="#" className="btn btn-success">Edit</a>*/}
                    {userMode && <div className="btn btn-success" onClick={()=>{navigate(`/${adminId}`)}}>View Establishment</div>}
                    {userMode && <div className="btn btn-success" onClick={()=>{navigate(`/reserve/${_id}`)}}>Reserve</div>}
                    </div>
                </div>
        </div>
    );

}

export default CourtCard
