import {useNavigate, useParams} from "react-router-dom";
import DateTimePicker from "react-datetime-picker";
import React, {useEffect, useRef, useState} from "react";
import {post,get} from "../utils/http";
import "./MakeReserve.css"
import {DayAvailability, dayAvailability} from "../Components/User/DayAvailability";
import NavBar from "../Components/User/NavBarClient";
import MapModal from "../Components/User/MapModal";
import WatchLaterTwoToneIcon from '@mui/icons-material/WatchLaterTwoTone';
import KeyboardDoubleArrowRightTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowRightTwoTone';
import {toast} from "react-toastify";
import * as emailjs from "emailjs-com";

export const MakeReserve2 = () => {

    let navigate = useNavigate();
    let courtId = useParams();
    courtId = courtId.courtId.toString()
    const[value1,setValue1] = useState(0)
    const [value2,setValue2]= useState(0)
    const [refresh,setRefresh] = useState(false)
    const[name, setName]=useState("")
    const [loading,setLoading]=useState(true)
    const[adminId,setAdminId]=useState('')
    const[admin,setAdmin] = useState(null)
    const[user,setUser] = useState(null)
    const[coordinates, setCoordinates] = useState(null)
    const today = new Date();
    const date= today.getDay();

    useEffect(()=>{
        get('dashboard/profile',{options: {withCredentials: true}}).then(res =>{
            setUser(res)
        })
    },[])

    console.log(user)

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
            setAdminId(res.adminId)
            setCoordinates({lat:res.location.coordinates[0],lng:res.location.coordinates[1]})
            // console.log(typeof adminId)

        })
    },[])

    useEffect(()=>{

        if (adminId != ''){
            post('dashboard/establishment',{id:adminId},{options: {withCredentials: true}}).then(res =>{
                setAdmin(res)
            })
        }

    },[adminId])

    const sendEmail = () => {
        emailjs.send('service_wuassrr',
                'template_olimpia_rp',
            {
                             to_name: admin.username,
                             from_name: user.username,
                             message: "Court: " + name + " From:" + value1.toString().substring(0,21) + " To: " + value2.toString().substring(0,21),
                             link_reserves:"http://localhost:3000/adminHome/myReserves",
                             user_email: admin.email
                        }
                        , 'T7x0pVZoUZqudMJqp')
            .then((result) => {
                console.log("se mando el mail")
            }, (error) => {
                console.log("no se mando el mail");
            });
    };

    useEffect(()=>{
        if(admin !== null && user !== null){
            if (value2  != 0 && value1 != 0){
                // console.log("1")
                let startDate= value1.toString()
                let   endDate = value2.toString()
                // console.log(startDate)
                // console.log(endDate)
                post('dashboard/makeReserve',{startDate, endDate, courtId },{options: {withCredentials: true}}).then((res) => {
                    toast.success(res.msg)
                    sendEmail()
                    setTimeout( function(){
                        navigate("/home");
                        }
                        ,700
                    )
                }).catch(() => {
                    toast.error("Not Available!")
                })

            }
        }

    },[refresh])


    return(
        !loading?

            <div>
                <NavBar></NavBar>
                <div className="text-success p-3 m-4" style={{backgroundColor:'rgba(0,0,0,0.9)'}}>
                    <div style={{backgroundColor:'rgba(34,139,34,0.5)', padding: '10px'}}>
                        <h2 className="court-name" >{name}'s Establishment</h2>
                        <div style={{display:"flex", justifyContent:"start", marginTop:"70px", marginLeft: '50px', marginBottom:'50px'}}>
                            <div>
                                <div className="form-label text-white">INITIAL TIME</div>
                                <DateTimePicker onChange={setValue1} value={value1}/>
                            </div>
                            <div style={{display:'flex', marginLeft:'20px', marginRight:'20px'}}>
                                <KeyboardDoubleArrowRightTwoToneIcon/>
                                <WatchLaterTwoToneIcon/>
                                <KeyboardDoubleArrowRightTwoToneIcon/>
                            </div>
                            <div>
                                <div className="form-label text-white">FINAL TIME</div>
                                <DateTimePicker onChange={setValue2} value={value2} minDate={value1} />
                            </div>
                            <div style={{display:'flex', justifyContent: "center", marginLeft:'80px'}}>
                                <a className="btn btn-success" style={{marginRight:'30px'}} onClick={()=> setRefresh(!refresh)}>Reserve</a>
                                <MapModal coordinates = {coordinates}/>
                            </div>
                        </div>
                        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",backgroundColor:"lightgray",height:"auto",overflow:"scroll",borderTop:"2px solid black"}}>
                            <DayAvailability style={{marginTop:"20px"}} day={"monday"} isToday={date === 1} courtId={courtId} admin={admin} user={user} name={name}></DayAvailability>
                            <DayAvailability style={{marginTop:"20px"}} day={"tuesday"} isToday={date === 2} courtId={courtId} admin={admin} user={user} name={name}></DayAvailability>
                            <DayAvailability style={{marginTop:"20px"}} day={"wednesday"} isToday={date === 3} courtId={courtId} admin={admin} user={user} name={name}></DayAvailability>
                            <DayAvailability style={{marginTop:"20px"}} day={"thursday"} isToday={date === 4} courtId={courtId} admin={admin} user={user} name={name}></DayAvailability>
                            <DayAvailability style={{marginTop:"20px"}} day={"friday"} isToday={date === 5} courtId={courtId} admin={admin} user={user} name={name}></DayAvailability>
                            <DayAvailability style={{marginTop:"20px"}} day={"saturday"} isToday={date === 6} courtId={courtId} admin={admin} user={user} name={name}></DayAvailability>
                            <DayAvailability style={{marginTop:"20px"}} day={"sunday"} isToday={date === 0} courtId={courtId} admin={admin} user={user} name={name}></DayAvailability>
                        </div>
                    </div>
                </div>

            </div>: null


    )
}


