import {useParams} from "react-router-dom";
import DateTimePicker from "react-datetime-picker";
import React, {useEffect, useState} from "react";
import {post} from "../utils/http";
import "./MakeReserve.css"
import ReservesTable from "../Components/User/ReservesTable";
export const MakeReserve2 = () => {
    let courtId = useParams();
    console.log(courtId)
    courtId = courtId.courtId.toString()
    const[value1,setValue1] = useState(0)
    const [value2,setValue2]= useState(0)
    const [refresh,setRefresh] = useState(false)
    const[court, setCourt]=useState(null)
    const[msg,setMessage] = useState()
    useEffect(()=>{
        post('dashboard/getCourt',{courtId},{options: {withCredentials: true}}).then(res =>{
                setCourt(res.field)
        })
    },[])
    useEffect(()=>{
        if (value2  != 0 && value1 != 0){
            console.log("1")
            let startDate= value1.toString()
            let   endDate = value2.toString()
            console.log(startDate)
            console.log(endDate)
            post('dashboard/makeReserve',{startDate, endDate, courtId },{options: {withCredentials: true}}).then((res) =>{

               console.log(res)
                setMessage(res.msg)
            })
        }
    },[refresh])


    return(
        <div className="text-success bg-white p-2">
            <div>
                <h2 className="court-name" >{court?.name}</h2>
            </div>
            <div className="form-label">INITIAL TIME</div>
            <DateTimePicker onChange={setValue1} value={value1}/>
            <div className="form-label">FINAL TIME</div>
            <DateTimePicker onChange={setValue2} value={value2} minDate={value1} />
            <button onClick={()=>setRefresh(!refresh)}> Reserve</button>
            <div className= "msg">
                <h4>
                    {msg}
                </h4>
            </div>
            {
                court?<ReservesTable reserves={court.reserves}/>: <></>
            }

        </div>
    )
}