import React, {useCallback} from "react";
import {deleteRequest, post} from "../../utils/http";
import {Alert} from "react-bootstrap";

const ReservesCard= ({reserve: {_id, courtId, isAccepted,isRejectded,startTime,endTime,courtName}, onAcceptRequest,onRejectRequest,userMode,}) => {

    const onAccept = useCallback(()=> {
        post('adminDashboard/accept-request', {_id}, {options: {withCredentials: true}}).then((res)=> {
            console.log(res)
            onAcceptRequest()
        })
    })

    const onReject = useCallback(()=> {
        deleteRequest('dashboard/deleteReserve',{_id},{options: {withCredentials: true}}).then((res)=> {
            onRejectRequest()
            console.log(isRejectded)
        })
    })

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{courtName}</h5>
                <div>
                    <h6 className="card-subtitle mb-2 text-muted">{new Date(startTime).toLocaleString()}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">{new Date(endTime).toLocaleString()}</h6>
                    <div>
                        {
                            !isRejectded?
                            isAccepted?
                                <Alert key="success" variant="success">
                                    Reservation has been Accepted
                                </Alert>:
                                <Alert key="warning" variant="warning">
                                    Waiting for Acceptance
                                </Alert>:
                                <Alert key="danger" variant="danger">
                                    Reserve has been Rejected/Canceled
                                </Alert>

                        }
                    </div>
                </div>
                {!userMode && <a href="#" className="btn btn-success" onClick={onAccept}>Accept</a>}
                {!userMode && <a href="#" className="btn btn-success" onClick={onReject}>Reject</a>}
                {userMode && <a href="#" className="btn btn-success" onClick={onReject}>Cancel Reservation</a> }
            </div>
        </div>
    );

}
 export default ReservesCard;
