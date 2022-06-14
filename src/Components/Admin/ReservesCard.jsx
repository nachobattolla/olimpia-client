import React, {useCallback} from "react";
import {deleteRequest, post} from "../../utils/http";
import EditCourtModal from "./EditCourtModal";
const ReservesCard= ({reserve: {_id, courtId, isAccepted,startDate,endDate,courtName}, onAcceptRequest,userMode}) => {
    const onAccept = useCallback(()=> {
        console.log("1")
        console.log(_id)
        post('adminDashboard/accept-request', {_id}, {options: {withCredentials: true}}).then((res)=> {
            console.log(res)
            onAcceptRequest()
        })
    })


    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{courtName}</h5>
                <div>
                    <h6 className="card-subtitle mb-2 text-muted">{startDate}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">{endDate}</h6>
                </div>
                {!userMode && <a href="#" className="btn btn-success" onClick={onAccept}>Accept</a>}
            </div>
        </div>
    );

}
 export default ReservesCard;
