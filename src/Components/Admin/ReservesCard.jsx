import React, {useCallback} from "react";
import {deleteRequest, post} from "../../utils/http";
import {Alert} from "react-bootstrap";

const ReservesCard= ({reserve: {_id, courtId, isAccepted,isRejected
,startTime,endTime,courtName}, onAcceptRequest,onRejectRequest,userMode,}) => {

    const onAccept = useCallback(()=> {
        post('adminDashboard/accept-request', {_id}, {options: {withCredentials: true}}).then((res)=> {
            console.log(res)
            onAcceptRequest()
        })
    })

    const onReject = useCallback(()=> {
        deleteRequest('dashboard/deleteReserve',{_id},{options: {withCredentials: true}}).then((res)=> {
            onRejectRequest()

        })
    })
    console.log(isRejected
)
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{courtName}</h5>
                <div>
                    <h6 className="card-subtitle mb-2 text-muted">{new Date(startTime).toLocaleString()}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">{new Date(endTime).toLocaleString()}</h6>
                    <div>
                        {
                            (isAccepted && !isRejected
)?
                                <Alert key="success" variant="success">
                                    Reservation has been Accepted
                                </Alert>:<></>

                        }
                    </div>

                    <div>
                        {
                        ((!isAccepted) && (!isRejected
))?
                            <Alert key="warning" variant="warning">
                                Waiting for Acceptance
                            </Alert>:<></>
                    }

                    </div>

                    <div>
                        {
                            isRejected
?
                            <Alert key="danger" variant="danger">
                            Reserve has been Rejected/Canceled
                            </Alert>:<></>
                        }
                    </div>
                </div>
                {   (!isRejected
)?
                    <div>
                        {!userMode && <a href="#" className="btn btn-success" onClick={onAccept}>Accept</a>}
                        {!userMode && <a href="#" className="btn btn-success" onClick={onReject}>Reject</a>}
                        {userMode && <a href="#" className="btn btn-success" onClick={onReject}>Cancel Reservation</a> }
                    </div>:<></>
                }


            </div>
        </div>
    );

}
 export default ReservesCard;
