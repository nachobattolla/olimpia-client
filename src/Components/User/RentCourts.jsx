import React, {useCallback, useEffect, useState} from 'react';
import RentCourt from "./RentCourts.css"
import {get} from "../../utils/http";
import CourtCard from "../Admin/CourtCard";
import ReservesCard from "../Admin/ReservesCard";

const RentCourts = () => {

    const [rentCourts, setRentCourts] = useState([])
    const [response, setResponse] = useState([])

    const [refreshRentCourts, setRefreshRentCourts] = useState("")

    useEffect(()=> {
        get('dashboard/myReservations', {options: {withCredentials: true}})
            .then(data=>{
            setRentCourts(data.body || [])
                setResponse(data)
            })
    }, [])

    return (
        <div className="RentCourts">
            <header className="RentCourts-header">
                <div className="content-RentCourts">
                    <div className="rentCourts-box">
                        <div className="card-title"> MY RENTS </div>
                        {response.map((rentCourt)=> <ReservesCard reserve={rentCourt} userMode={true}/>)}
                    </div>
                </div>
            </header>
        </div>
    );
}

export default RentCourts