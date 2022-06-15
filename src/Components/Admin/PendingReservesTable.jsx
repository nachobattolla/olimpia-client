import React, {useEffect, useState} from "react";
import {get} from "../../utils/http";
import AddCourtModal from "./AddCourtModal";
import CourtCard from "./CourtCard";
import ReservesCard from "./ReservesCard";
const PendingReservesTable = () => {
     const [reserves,setReserves] = useState([])
    const [refresh, setRefresh] = useState(true)
    useEffect(()=> {
        get('adminDashboard/requests-table',{options: {withCredentials: true}}).then(
            data=>{
                setReserves(data.result || [])
            })
    }, [refresh])
    return(
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col-10">
                    <div className= "courtsBox">
                        <label className="justify-content-center">MY COURTS</label>
                        {
                            reserves.map((el)=> <ReservesCard reserve={el} onAcceptRequest={()=> setRefresh(!refresh)} onRejectRequest={()=>setRefresh(!refresh)}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  PendingReservesTable