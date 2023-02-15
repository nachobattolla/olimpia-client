import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {post} from "../../utils/http";
import {toast} from "react-toastify";
import './DayAvailability.css'
import {useNavigate} from "react-router-dom";
import * as emailjs from "emailjs-com";
import {useState} from "react";

const style = {
    position:'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const ConfirmationReservationModal = (props) => {
    let navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let startTime = " ";
    let endTime = " ";

    function calculateDate(reserveDay, today, date) {

        if (today === 0){
            switch(reserveDay) {
                case "monday" :
                    return date + 1;
                case "tuesday" :
                    return date + 2;
                case "wednesday" :
                    return date + 3;
                case "thursday" :
                    return date + 4;
                case "friday" :
                    return date + 5;
                case "saturday":
                    return date + 6;
            }
        }
        if (today === 1){
            switch(reserveDay) {
                case "sunday" :
                    return date + 6;
                case "tuesday" :
                    return date + 1;
                case "wednesday" :
                    return date + 2;
                case "thursday" :
                    return date + 3;
                case "friday" :
                    return date + 4;
                case "saturday":
                    return date + 5;
            }
        }
      
        if (today === 2){
            switch(reserveDay) {
                case "sunday" :
                    return date + 5;
                case "monday" :
                    return date + 6;
                case "wednesday" :
                    return date + 1;
                case "thursday" :
                    return date + 2;
                case "friday" :
                    return date + 3;
                case "saturday":
                    return date + 4;
            }
        }
        if (today === 3){
            switch(reserveDay) {
                case "sunday":
                    return date + 4;
                case "monday":
                    return date + 5;
                case "tuesday":
                    return date + 6;
                case "thursday":
                    return date + 1;
                case "friday":
                    return date + 2;
                case "saturday":
                    return date + 3;
            }
        }
        if (today === 4){
            switch(reserveDay) {
                case "sunday" :
                    return date + 3;
                case "monday" :
                    return date + 4;
                case "tuesday" :
                    return date + 5;
                case "wednesday" :
                    return date + 6;
                case "friday" :
                    return date + 1;
                case "saturday":
                    return date + 2;
            }
        }
        if (today === 5){
            switch(reserveDay) {
                case "sunday" :
                    return date + 2;
                case "monday" :
                    return date + 3;
                case "tuesday" :
                    return date + 4;
                case "wednesday" :
                    return date + 5;
                case "thursday" :
                    return date + 6;
                case "saturday":
                    return date + 1;
            }
        }
        if (today === 6){
            switch(reserveDay) {
                case "sunday" :
                    return date + 1;
                case "monday" :
                    return date + 2;
                case "tuesday" :
                    return date + 3;
                case "wednesday" :
                    return date + 4;
                case "thursday" :
                    return date + 5;
                case "friday":
                    return date + 6;
            }
        }

    }

    const calculateDay = (day) => {
        switch (day) {
            case "monday":
                return "Mon"
            case "tuesday":
                return "Tue"
            case "wednesday":
                return "Wed"
            case "thursday":
                return "Thu"
            case "friday":
                return "Fri"
            case "saturday":
                return "Sat"
            case "sunday":
                return "Sun"
        }
    }

    const calculateMonth = (month) => {
        switch (month) {
            case 1:
                return "Jan"
            case 2:
                return "Feb"
            case 3:
                return "Mar"
            case 4:
                return "Apr"
            case 5:
                return "May"
            case 6:
                return "Jun"
            case 7:
                return "Jul"
            case 8:
                return "Aug"
            case 9:
                return "Sep"
            case 10:
                return "Oct"
            case 11:
                return "Nov"
            case 12:
                return "Dec"
        }
    }


    const calculateStarTime = (day, isToday, hour) => {
        const time = new Date()
        let timeS = calculateDay(day) + " " + calculateMonth(time.getMonth()+1)

        if (isToday){
            if (10 > time.getDate()) {
                timeS = timeS + " 0" + time.getDate()
            }else{
                timeS = timeS + " " + time.getDate()
            }
        }else{
            if (10 > time.getDate()) {
                timeS = timeS + " 0" + calculateDate(day,time.getDay(), time.getDate()).toString()
            }else{
                 timeS = timeS + " " + calculateDate(day,time.getDay(), time.getDate()).toString()
            }
        }

        timeS = timeS + " " + time.getFullYear() + " " + hour + ":00 GMT-0300 (Argentina Standard Time)"

        return timeS;
    }



    const calculateEndTime = (time) => {
        if (time.substring(19,21) === "30"){
            if (parseInt(time.substring(16,18)) < 23) {
                const timeS2 = time.substring(0, 16) + (parseInt(time.substring(16, 18)) + 1).toString() + ":00" + time.substring(21, 59)
                return timeS2
            }else {
                const timeS2 = time.substring(0, 18) + ":59" + time.substring(21, 59)
                return timeS2
            }
        }else{
            const timeS2 = time.substring(0,19) + "30" + time.substring(21,59)
            return timeS2
        }
    }

    const sendEmail = () => {
        emailjs.send('service_wuassrr',
            'template_olimpia_rp',
            {
                to_name: props.admin.username,
                from_name: props.user.username,
                message: "Court: " + props.name + " From:" + startTime.substring(0,21) + " To: " + endTime.substring(0,21),
                link_reserves:"http://localhost:3000/adminHome/myReserves",
                user_email: props.admin.email
            }
            , 'T7x0pVZoUZqudMJqp')
            .then((result) => {
            }, (error) => {
            });
    };

    const makeReservation = (courtId,day,isToday, hour) => {
        if (courtId && day && isToday !== null && hour) {
            const startDate = calculateStarTime(day, isToday, hour);
            const endDate = calculateEndTime(startDate)
            startTime = startDate
            endTime = endDate
            if (props.admin !== null && props.user !== null) {
                post('dashboard/makeReserve', {
                    startDate,
                    endDate,
                    courtId,
                    adminId: props.admin._id
                }, {options: {withCredentials: true}}).then((res) => {
                    toast.success(res.msg)
                    handleClose()
                    sendEmail()
                    setTimeout( function(){
                        navigate("/home",1000)
                        }
                    )
                }).catch(() => {
                    toast.error("Not Available!")
                })
            }
        } else{
            toast.error("Not Available!")
        }
    }

    const getNextHour = (hours, index) => {
        if (hours.length > index+1) {
            return(
                hours[index+1]
            );
        }else{
            return (
                hours[0]
            );
        }
    }

    return (
        <div style={{display:"flex", alignItems:'center', justifyContent:'center'}}>
            <div className={"hour"} style={{textAlign:"center"}} onClick={()=>handleOpen()}>{props.hours[props.index]}</div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h4" component="h3" style={{color:"black", textAlign:'center'}}>
                            Send Request?
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 4, mb:3, color:'rgba(0, 0, 0, 0.8)' }}>
                            Reserve half an hour from {props.hours[props.index]} to {getNextHour(props.hours,props.index)} on {props.day} in {props.name}'s Establishment
                        </Typography>
                        <div style={{display: "flex", justifyContent: "space-evenly", margin:'10px'}}>
                            <Button onClick={() => makeReservation(props.courtId, props.day,props.isToday,props.hours[props.index])} style={{color:"forestgreen"}}> CONFIRM </Button>
                            <Button onClick={() => handleClose()} style={{color:"red"}}> CANCEL </Button>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

