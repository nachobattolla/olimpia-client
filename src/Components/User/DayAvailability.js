import React, {useState} from "react";
import "./DayAvailability.css";
import login from "../LoginRegister/Login";
import {post} from "../../utils/http";
import {toast} from "react-toastify";
import {ConfirmationReservationModal} from "./ConfirmationReservationModal";

export const DayAvailability = (props) => {

    const json=JSON.parse(window.localStorage.getItem(props.day));
    const time=json.time;

    function showAvailableHours(hour,index) {
        return(
            !hour ?
                <div>
                    <ConfirmationReservationModal
                        courtId={props.courtId}
                        hours={hours}
                        index={index}
                        day={props.day}
                        isToday={props.isToday}
                        admin={props.admin}
                        user={props.user}
                        name={props.name}
                    />
                </div>
                :
                <></>
        )
    }

    return (
        <div className={"dayContainer"} style={{backgroundColor:props.isToday?"papayawhip":"white"}}>
            <h3>{props.isToday?"Today":"Next "+props.day} ↓</h3>
            {
                // time.map((hour, index) => (
                //     // <div className={hour ? "hourRed" : "hour"} onClick={(hour) = reserveHour}>
                //     //     {hours[index]}
                //     // </div>
                // ))
                time.map((hour, index) => showAvailableHours(hour, index))
            }
        </div>
    );
};


const hours = ["00:00","00:30","01:00","01:30","02:00","02:30","03:00","03:30","04:00","04:30","05:00","05:30",
    "06:00", "06:30", "07:00","07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30",
    "12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30",
    "18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30"]