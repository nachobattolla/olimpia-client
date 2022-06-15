import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import DateTimePicker from "react-datetime-picker";
import {post} from "../utils/http";
import Calendar from "react-calendar";
import {HourBox} from "../Components/User/HourBox"
import "./MakeReserve.css"
export const MakeReserve = () => {

    let courtId = useParams();
    let initialState = [{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null},{isAvailable:false, startTime: null, endTime: null}]
    const[hours, SetHours] = useState(initialState);
    const[day, setDay] = useState(new Date());
   // const[startDate,setStartDate] = useState(0);
    //const[endDate,setEndDate] = useState(0);
    const [next, setNext] = useState(false)
    let dayInNumber;
    const calculateAvailable = ()=>{
        let dayInNumber = Date.parse(day.toString())- (3*60*60*1000);
        console.log(dayInNumber)
        for (let i = 0; i < 24; i++) {
            let startDate = dayInNumber+ i*60*60*1000
            let endDate  = dayInNumber + (i+1)*60*60*1000
            console.log("1 "+startDate)
            console.log("2 "+endDate)
                post('dashboard/availableTime',{startDate,endDate,courtId},{options: {withCredentials: true}}).then(res=>{
                    initialState[i] = res
                    SetHours(initialState)
                    setNext(true)
                })


        }
        console.log(hours)
    }


    useEffect(()=>{
        console.log("1")
        if (day != null){
            calculateAvailable()
        }
    },[day])

  return(
      <div>
          <Calendar onChange={setDay} value={day} minDate={new Date()} disableClock={true} />
          <div >
              {
                  hours?.map(hour => <HourBox data={{hour,courtId,dayInNumber}} ></HourBox>)
              }
          </div>
      </div>
  )

}