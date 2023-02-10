import React, {useEffect, useState} from "react";
import {get} from "../../utils/http";
import ReservesCard from "../Admin/ReservesCard";
import "./MyReservationsTable.css";


const MyReservationsTable = () => {

    const [reserves,setReserves] = useState([])
    const [refresh, setRefresh] = useState(true)

    useEffect(()=> {
        get('dashboard/myReservations',{options: {withCredentials: true}}).then(
            data=>{
                setReserves(data || [])
                console.log(reserves)
            })
        console.log(reserves)
    }, [refresh])
    console.log(reserves)

    return(
        <div className="courtsBox">
            <div className= "requests-title-container">
                <div className="title-container">
                    <h2>MY RESERVATIONS</h2>
                </div>
                <div className="reserves-cards-container">
                {
                    reserves.map((el)=> <ReservesCard reserve={el} onAcceptRequest={()=> setRefresh(!refresh)} onRejectRequest={()=> setRefresh(!refresh)}  userMode={true}/>)
                }
                </div>
            </div>
        </div>
    )
}

export default  MyReservationsTable