import "./HourBox.css"
import {useNavigate} from "react-router-dom";
import {post} from "../../utils/http";
import {useState} from "react";

export const HourBox= (props) => {
    const navigate = useNavigate()
    const [msg, setMsg] = useState("")
    function Reserve() {
        let startDate = props.data.dayInNumber+ (props.data.hour.startTime)*60*60*1000
        let endDate  = props.data.dayInNumber+(props.data.hour.endTime)*60*60*1000
        post('dashboard/makeReserve',{startDate: startDate, endDate: endDate, courtId: props.data.courtId}).then((res) =>{
            setMsg(res.data.msg)
        })
    }

    return (
        <div className ="hourBox">
            <div>
                <h2 className= "startDate"> {props.data.hour.startTime} :00 </h2>
                <h2 className= "endDate"> {props.data.hour.endTime}:00</h2>
                <h2 className="available"> {props.data.hour.isAvailable} </h2>
        </div>
            <br/>
            <br/>
            <br/>
            <button disabled={props.data.hour.isAvailable} on onClick={Reserve}> Reserve </button>
            <div>
                {msg}
            </div>
        </div>
    )
}