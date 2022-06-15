import "./HourBox.css"

export const HourBox= (props) => {
console.log(props)
    return (
        <div className ="hourBox">
            <div>
                <h2 className= "startDate"> {props.data.startTime} </h2>
                <h2 className= "endDate"> {props.data.endTime}</h2>
                <h2 className="available"> {props.data.isAvailable} </h2>
        </div>
            <br/>
            <br/>
            <br/>
            <button disabled={props.data.isAvailable}> Reserve </button>
        </div>
    )
}