import React, {useCallback, useEffect, useState} from "react";
import {deleteRequest, post} from "../../utils/http";
import {Alert} from "react-bootstrap";
import * as emailjs from "emailjs-com";
import {toast} from "react-toastify";
import login from "../LoginRegister/Login";

const ReservesCard= ({reserve: {_id, courtId, isAccepted,isRejected
,startTime,endTime,courtName,userId}, onAcceptRequest,onRejectRequest,userMode,admin}) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        return () => {
            post('dashboard/getProfile', {userId}, {options: {withCredentials: true}}).then((res)=> {
                setUser(res)
                console.log(user)
            }).catch( () => {
                console.log("no consigo el user")
            })
        };
    }, []);

    const onAccept = useCallback(()=> {
        post('adminDashboard/accept-request', {_id}, {options: {withCredentials: true}}).then((res)=> {
            console.log(res)
            onAcceptRequest()
            toast.success("You Accepted a request!")
            sendEmail("ACCEPTED")
        })
    })

    const onReject = useCallback(()=> {
        deleteRequest('dashboard/deleteReserve',{_id},{options: {withCredentials: true}}).then((res)=> {
            onRejectRequest()
            toast.success("You Rejected a request!")
            sendEmail("REJECTED")
        })
    })

    const sendEmail = (state) => {
        emailjs.send('service_wuassrr',
            'template_pegvuzl',
            {
                state: state,
                user_name: user.user_name,
                message: "Court: " + courtName + " From:" + startTime + " To: " + endTime,
                from_name: admin.user_name,
                user_email: user.user_email,
            }
            , 'T7x0pVZoUZqudMJqp')
            .then((result) => {
                console.log("se mando el mail")
            }, (error) => {
                console.log("no se mando el mail");
            });
    };

    return (
        <div className="card" style={{maxWidth:'400px', margin: '10px'}}>
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
                    <div style={{}}>
                        {!userMode && <a href="#" className="btn btn-success w-50" onClick={onAccept}>Accept</a>}
                        {!userMode && <a href="#" className="btn btn-success w-50" onClick={onReject}>Reject</a>}
                        {userMode && <a href="#" className="btn btn-success w-100" onClick={onReject}>Cancel Reservation</a> }
                    </div>:<></>
                }


            </div>
        </div>
    );

}
 export default ReservesCard;
