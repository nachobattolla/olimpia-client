import {useParams} from "react-router-dom";
import DateTimePicker from "react-datetime-picker";
import React, {useEffect, useState} from "react";
import {post} from "../utils/http";
import "./MakeReserve.css"
import ReservesTable from "../Components/User/ReservesTable";
import {DayAvailability, dayAvailability} from "../Components/User/DayAvailability";
import NavBar from "../Components/User/NavBarClient";
import {Alert} from "react-bootstrap";

export const MakeReserve2 = () => {
    let courtId = useParams();
    console.log(courtId)
    courtId = courtId.courtId.toString()
    const[value1,setValue1] = useState(0)
    const [value2,setValue2]= useState(0)
    const [refresh,setRefresh] = useState(false)
    const[name, setName]=useState("")
    const[msg,setMessage] = useState("");
    const [loading,setLoading]=useState(true)

    const today = new Date();
    const date= today.getDay();


    useEffect(()=>{
        post('dashboard/getCourt',{courtId},{options: {withCredentials: true}}).then(res =>{

            window.localStorage.setItem("monday",JSON.stringify(res.reserves.Monday))
            window.localStorage.setItem("tuesday",JSON.stringify(res.reserves.Tuesday))
            window.localStorage.setItem("wednesday",JSON.stringify(res.reserves.Wednesday))
            window.localStorage.setItem("thursday",JSON.stringify(res.reserves.Thursday))
            window.localStorage.setItem("friday",JSON.stringify(res.reserves.Friday))
            window.localStorage.setItem("saturday",JSON.stringify(res.reserves.Saturday))
            window.localStorage.setItem("sunday",JSON.stringify(res.reserves.Sunday))

            setLoading(false)
            setName(res.name)
            
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
        !loading?

            <div>
                <NavBar></NavBar>
                <div className="text-success bg-white p-2">

                        <h2 className="court-name" >{name}</h2>
                    <div className="form-label">INITIAL TIME</div>
                    <DateTimePicker onChange={setValue1} value={value1}/>
                    <div className="form-label">FINAL TIME</div>
                    <DateTimePicker onChange={setValue2} value={value2} minDate={value1} />
                    <button onClick={()=>setRefresh(!refresh)}> Reserve</button>
                    <div className= "msg">
                        { (msg!=="")?
                            <Alert key= "success" variant="success">
                                {msg}
                            </Alert>:<></>
                        }

                    </div>

                </div>
                <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",backgroundColor:"lightgray",height:"150vh",overflow:"scroll",borderTop:"2px solid black"}}>
                    <DayAvailability style={{marginTop:"20px"}} day={"monday"} isToday={date === 1}></DayAvailability>
                    <DayAvailability style={{marginTop:"20px"}} day={"tuesday"} isToday={date === 2}></DayAvailability>
                    <DayAvailability style={{marginTop:"20px"}} day={"wednesday"} isToday={date === 3}></DayAvailability>
                    <DayAvailability style={{marginTop:"20px"}} day={"thursday"} isToday={date === 4}></DayAvailability>
                    <DayAvailability style={{marginTop:"20px"}} day={"friday"} isToday={date === 5}></DayAvailability>
                    <DayAvailability style={{marginTop:"20px"}} day={"saturday"} isToday={date === 6}></DayAvailability>
                    <DayAvailability style={{marginTop:"20px"}} day={"sunday"} isToday={date === 0}></DayAvailability>
                </div>




            </div>: null


    )
}


