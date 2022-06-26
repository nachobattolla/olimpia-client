import React, {useEffect, useState} from "react";
import {get} from "../../utils/http";
import ReservesCard from "../Admin/ReservesCard";



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
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col-10">
                    <div className= "courtsBox">
                        <label className="justify-content-center">MY REQUESTS</label>
                        {
                            reserves.map((el)=> <ReservesCard reserve={el} onAcceptRequest={()=> setRefresh(!refresh)} onRejectRequest={()=> setRefresh(!refresh)}  userMode={true}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  MyReservationsTable