import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import DateTimePicker from "react-datetime-picker";
import {post} from "../utils/http";

export const MakeReserve = () => {

    const courtId = useParams();
    let initialState = [{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null}]
    const[hours, SetHours] = useState(initialState)
    const[day, setDay] = useState(null)


    useEffect(()=>{
        let dayInNumber = Date.parse(day.toString())
        for (let i = 0; i < hours.length; i++) {
            let startDate= dayInNumber+ i*60*60*1000;
            let  endDate= dayInNumber + (i+1)*60*60*1000
            post('dashboard/availableTime',{startDate,endDate,courtId},{options: {withCredentials: true}}).then(res=>{
                if (res.isAvailable){
                    initialState[i] = {isAvailable:true, startTime: i, endTime: i+1,}
                    SetHours(initialState)
                }else{
                    initialState[i] = {isAvailable:false, startTime:i, endTime:i+1,}
                }
                console.log(hours)
            })
        }
    },[day])

  return(
      <div>
          <DateTimePicker onChange={()=>setDay(day)} value={day} minDate={new Date()} disableClock={true} />
      </div>
  )

}