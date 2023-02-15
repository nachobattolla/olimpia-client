import React, {useEffect, useState} from "react";
import {get, post} from "../../utils/http";
import ReservesCard from "../Admin/ReservesCard";
import "./MyReservationsTable.css";
import DateTimePicker from "react-datetime-picker";
import KeyboardDoubleArrowRightTwoToneIcon from "@mui/icons-material/KeyboardDoubleArrowRightTwoTone";
import WatchLaterTwoToneIcon from "@mui/icons-material/WatchLaterTwoTone";


const MyReservationsTable = () => {

    const [reserves,setReserves] = useState([])
    const [refresh, setRefresh] = useState(true)
    const[filter, setFilter] = useState({accepted: true, waiting: true, cancelled:false})
    const [filteredReserves,setFilteredReserves] = useState([])
    const [fromDate, setFromDate] = useState(new Date())
    const [toDate, setToDate] = useState()
    console.log(filteredReserves)
    useEffect(()=> {
        get('dashboard/myReservations',{options: {withCredentials: true}}).then(
            data=>{
                setReserves(data || [])
            })
        console.log(reserves)
    }, [refresh])

    useEffect(()=> {
            setFilteredReserves(
                reserves.filter(reserve =>
                    (
                        ((filter.accepted && reserve.isAccepted) || (filter.cancelled && reserve.isRejected) || (filter.waiting &&(!reserve.isAccepted && !reserve.isRejected)))
                        && (new Date(reserve.startTime)>= fromDate) && ( toDate ? (new Date(reserve.endTime)<= toDate): true)
                    )
                )
            )
        }
        ,
        [reserves, filter, fromDate, toDate])
    useEffect(()=>{
        filteredReserves.map(reserve=>{
            if (reserve.hasntUserSeen){
                console.log(reserve)
                post('dashboard/seenReserve',{_id:reserve._id},{options: {withCredentials: true}}).then()
            }
        })
        },[filteredReserves])

    return(
        <div className="courtsBox">
            <div className= "requests-title-container">
                <div className="title-container">
                    <h2>MY RESERVATIONS</h2>
                </div>

            </div>
            <div className={'requests-filter-container'}>
                <div className="checkbox" >
                    <input className="checkbox-pop" type="checkbox" id="check1" checked={filter.waiting}
                           onClick={()=>setFilter({...filter, waiting: !filter.waiting})}
                    />
                    <label htmlFor="check1"><span></span>Waiting</label>
                </div>
                <div className="checkbox" >
                    <input className="checkbox-pop" type="checkbox" id="check2"
                           checked={filter.accepted}
                           onClick={()=>setFilter({...filter, accepted: !filter.accepted})}/>
                    <label htmlFor="check2" ><span></span>Accepted</label>
                </div>
                <div className="checkbox">
                    <input className="checkbox-pop" type="checkbox" id="check3"
                           checked={filter.cancelled}
                           onClick={()=>setFilter({...filter, cancelled: !filter.cancelled})}
                    />
                    <label htmlFor="check3"><span></span> Canceled</label>
                </div>

                <div>
                    <div className="form-label text-white">INITIAL TIME</div>
                    <DateTimePicker onChange={setFromDate} value={fromDate}/>
                </div>
                <div style={{display:'flex', marginLeft:'5px', marginRight:'5px'}}>
                    <KeyboardDoubleArrowRightTwoToneIcon/>
                    <WatchLaterTwoToneIcon/>
                    <KeyboardDoubleArrowRightTwoToneIcon/>
                </div>
                <div>
                    <div className="form-label text-white">FINAL TIME</div>
                    <DateTimePicker onChange={setToDate} value={toDate} minDate={fromDate} />
                </div>
            </div>
            <div className="reserves-cards-container">
                {
                    filteredReserves.map((el)=> <ReservesCard reserve={el} onAcceptRequest={()=> setRefresh(!refresh)} onRejectRequest={()=> setRefresh(!refresh)}  userMode={true}/>)
                }
            </div>
        </div>
    )
}

export default  MyReservationsTable