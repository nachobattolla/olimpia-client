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

    function calculateDate(reserveDay, today, date) {
        switch (today === 0){
            case reserveDay === "monday" :
                return  date + 1;
            case reserveDay === "tuesday" :
                return date + 2;
            case reserveDay === "wednesday" :
                return date + 3;
            case reserveDay === "thursday" :
                return date + 4;
            case reserveDay === "friday" :
                return date + 5;
            case reserveDay === "saturday":
                return date + 6;
        }
        switch (today === 1){
            case reserveDay === "sunday" :
                return  date + 6;
            case reserveDay === "tuesday" :
                return date + 1;
            case reserveDay === "wednesday" :
                return date + 2;
            case reserveDay === "thursday" :
                return date + 3;
            case reserveDay === "friday" :
                return date + 4;
            case reserveDay === "saturday":
                return date + 5;
        }
        switch (today === 2){
            case reserveDay === "sunday" :
                return  date + 5;
            case reserveDay === "monday" :
                return date + 6;
            case reserveDay === "wednesday" :
                return date + 1;
            case reserveDay === "thursday" :
                return date + 2;
            case reserveDay === "friday" :
                return date + 3;
            case reserveDay === "saturday":
                return date + 4;
        }
        switch (today === 3){
            case reserveDay === "sunday":
                return  date + 4;
            case reserveDay === "monday":
                return date + 5;
            case reserveDay === "tuesday":
                return date + 6;
            case reserveDay === "thursday":
                return date + 1;
            case reserveDay === "friday":
                return date + 2;
            case reserveDay === "saturday":
                return date + 3;
        }
        switch (today === 4){
            case reserveDay === "sunday" :
                return  date + 3;
            case reserveDay === "monday" :
                return date + 4;
            case reserveDay === "tuesday" :
                return date + 5;
            case reserveDay === "wednesday" :
                return date + 6;
            case reserveDay === "friday" :
                return date + 1;
            case reserveDay === "saturday":
                return date + 2;
        }
        switch (today === 5){
            case reserveDay === "sunday" :
                return  date + 2;
            case reserveDay === "monday" :
                return date + 3;
            case reserveDay === "tuesday" :
                return date + 4;
            case reserveDay === "wednesday" :
                return date + 5;
            case reserveDay === "thursday" :
                return date + 6;
            case reserveDay === "saturday":
                return date + 1;
        }
        switch (today === 6){
            case reserveDay === "sunday" :
                return  date + 1;
            case reserveDay === "monday" :
                return date + 2;
            case reserveDay === "tuesday" :
                return date + 3;
            case reserveDay === "wednesday" :
                return date + 4;
            case reserveDay === "thursday" :
                return date + 5;
            case reserveDay === "friday":
                return date + 6;
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

    const makeReservation = (courtId,day,isToday, hour) => {
        console.log(courtId + " " + day + " " + isToday + " " + hour)
        if (courtId && day && isToday !== null && hour) {
            console.log("entro")
            const startDate = calculateStarTime(day, isToday, hour);
            const endDate = calculateEndTime(startDate)
            if (props.admin !== null && props.user !== null) {
                post('dashboard/makeReserve', {
                    startDate,
                    endDate,
                    courtId
                }, {options: {withCredentials: true}}).then((res) => {
                    toast.success(res.msg)
                    handleClose()
                    setTimeout( function(){
                            navigate("/home");
                        }
                        ,1000
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

// var timeS = time.getFullYear()
//

//
// //time : T21:31:00.000Z
//
// timeS = timeS + hour.substring(0,4) + (parseInt(hour.substring(4,5))+1).toString() + ":00.000Z"
