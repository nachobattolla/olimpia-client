import React, {useEffect, useState} from "react";
import {get} from "../../utils/http";
import ReservesCard from "./ReservesCard";
import "../User/MyReservationsTable.css"

const PendingReservesTable = () => {

     const [reserves,setReserves] = useState([])
    const [refresh, setRefresh] = useState(true)
    const[admin,setAdmin] = useState(null)

    useEffect(()=> {
        get('adminDashboard/requests-table',{options: {withCredentials: true}}).then(
            data=>{
                setReserves(data.result || [])
            })
        console.log(reserves)
    }, [refresh])

    useEffect(()=>{
        get('dashboard/profile',{options: {withCredentials: true}}).then(res =>{
            setAdmin(res)
        })
    },[])

    return(
        <div className="courtsBox">
            <div className= "requests-title-container">
                <div className="title-container">
                    <h2>MY REQUESTS</h2>
                </div>
                <div className="reserves-cards-container">
                    {
                        reserves.map((el)=> <ReservesCard reserve={el} admin={admin} onAcceptRequest={()=> setRefresh(!refresh)} onRejectRequest={()=> setRefresh(!refresh)}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default  PendingReservesTable