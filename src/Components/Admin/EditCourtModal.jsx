import React, {useCallback, useState} from 'react';
import "../../pages/AdminCourtsPage"
import {IoAdd} from "@react-icons/all-files/io5/IoAdd";
import {GiSoccerField} from "@react-icons/all-files/gi/GiSoccerField";
import AdminCourts from "./AdminCourts";
import { post} from "../../utils/http";
import NewContainerMap from "../Shared/NewMapContainer";
function numToTime(num) {
    if(num<10){
        return "0"+num+":00"
    }
    return num + ":00";
}
const EditCourtModal  = ({courtData,onEdit}) => {
    const [name, setName] = useState(courtData.name)
    const [sport, setSport] = useState(courtData.sport)
    const [location, setLocation] = useState(courtData.address)
    const [description, setDescription] = useState(courtData.description)
    const [price, setPrice] = useState(courtData.price)
    const [openHourMon,setOpenHourMon] = useState(numToTime(courtData.openHourMon))
    const [closeHourMon,setCloseHourMon] = useState(numToTime(courtData.closeHourMon))
    const [openHourTue,setOpenHourTue] = useState(numToTime(courtData.openHourTue))
    const [closeHourTue,setCloseHourTue] = useState(numToTime(courtData.closeHourTue))
    const [openHourWed,setOpenHourWed] = useState(numToTime(courtData.openHourWed))
    const [closeHourWed,setCloseHourWed] = useState(numToTime(courtData.closeHourWed))
    const [openHourThur,setOpenHourThur] = useState(numToTime(courtData.openHourThur))
    const [closeHourThur,setCloseHourThur] = useState(numToTime(courtData.closeHourThur))
    const [openHourFri,setOpenHourFri] = useState(numToTime(courtData.openHourFri))
    const [closeHourFri,setCloseHourFri] = useState(numToTime(courtData.closeHourFri))
    const [openHourSat,setOpenHourSat] = useState(numToTime(courtData.openHourSat))
    const [closeHourSat,setCloseHourSat] = useState(numToTime(courtData.closeHourSat))
    const [openHourSun,setOpenHourSun] = useState(numToTime(courtData.openHourSun))
    const [closeHourSun,setCloseHourSun] = useState(numToTime(courtData.closeHourSun))
    const _id = courtData._id
    console.log(courtData)
    console.log(name,sport)
    console.log(openHourSun)
    const onClick = useCallback(()=> {
        const newCourtData = {name, sport, location:  {
                type: 'Point',
                coordinates: [14,32],
            }, description,
            price: parseInt(price),
            openHourMon: parseInt(openHourMon),
            closeHourMon: parseInt(closeHourMon),
            openHourTue: parseInt(openHourTue),
            closeHourTue: parseInt(closeHourTue),
            openHourWed: parseInt(openHourWed),
            closeHourWed: parseInt(closeHourWed),
            openHourThur: parseInt(openHourThur),
            closeHourThur: parseInt(closeHourThur),
            openHourFri: parseInt(openHourFri),
            closeHourFri: parseInt(closeHourFri),
            openHourSat: parseInt(openHourSat),
            closeHourSat: parseInt(closeHourSat),
            openHourSun: parseInt(openHourSun),
            closeHourSun: parseInt(closeHourSun),
        _id}
        post('adminDashboard/edit-court',newCourtData , {options: {withCredentials: true}}).then(()=> {
            onEdit(newCourtData)
        })
    })
    console.log(name)
    return (
        <>
            <div className="btn rounded-pill btn-outline-success bg-primary pe-5" data-bs-toggle="modal" data-bs-target={`#new-edit-modal${_id}`} >
                Edit
            </div>
            <div className="modal fade" id={`new-edit-modal${_id}`} tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">ADD COURT TO ESTABLISHMENT</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <label> Name </label>
                            <input className="form-control" value={name} onChange={(event)=>setName(event.target.value)}/>
                            <label className="m-2"> Sport </label>
                            <div className="my-3">
                                <select className="form-select" aria-label="Default select example" value={sport} onChange={(event)=>setSport(event.target.value)}>
                                    <option selected>--------------------------------------------------------------------------</option>
                                    <option value="Football">Football</option>
                                    <option value="Basketball">Basketball</option>
                                    <option value="Tennis">Tennis</option>
                                    <option value="Paddle">Paddle</option>
                                </select>
                            </div>
                            <div>
                                <label> Location </label>
                                <input className="form-control" value={location} onChange={(event)=> {setLocation(event.target.value)}}/>
                                <NewContainerMap setLocation={setLocation} input={location} />
                            </div>
                            <br/>
                            <label> Description </label>
                            <input className="form-control" value={description} onChange={(ev)=>setDescription(ev.target.value)}/>
                            <label> Hourly price </label>
                            <input type="number" className="form-control" value={price} onChange={(ev)=>setPrice(ev.target.value)}/>
                            <label> Open Hour </label>
                            <div className="row align-items-start">

                                <div className="col">
                                    <label> Open Hour Monday </label>
                                    <input className="form-control" type="time" value={openHourMon} onChange={(event)=> {setOpenHourMon(event.target.value)
                                    }}/>

                                </div>

                                <div className="col">
                                    <label> Close Hour Monday </label>
                                    <input className="form-control" type="time" value={closeHourMon} onChange={(event)=> {setCloseHourMon(event.target.value)}}/>
                                </div>

                            </div>
                            <div className="row align-items-start">

                                <div className="col">
                                    <label> Open Hour Tueday </label>
                                    <input className="form-control" type="time" value={openHourTue} onChange={(event)=> {setOpenHourTue(event.target.value)}}/>

                                </div>

                                <div className="col">
                                    <label> Close Hour Tueday </label>
                                    <input className="form-control" type="time" value={closeHourTue} onChange={(event)=> {setCloseHourTue(event.target.value)}}/>
                                </div>

                            </div>
                            <div className="row align-items-start">

                                <div className="col">
                                    <label> Open Hour Wedday </label>
                                    <input className="form-control" type="time" value={openHourWed} onChange={(event)=> {setOpenHourWed(event.target.value)}}/>

                                </div>

                                <div className="col">
                                    <label> Close Hour Wedday </label>
                                    <input className="form-control" type="time" value={closeHourWed} onChange={(event)=> {setCloseHourWed(event.target.value)}}/>
                                </div>

                            </div>
                            <div className="row align-items-start">

                                <div className="col">
                                    <label> Open Hour Thurday </label>
                                    <input className="form-control" type="time" value={openHourThur} onChange={(event)=> {setOpenHourThur(event.target.value)}}/>

                                </div>

                                <div className="col">
                                    <label> Close Hour Thurday </label>
                                    <input className="form-control" type="time" value={closeHourThur} onChange={(event)=> {setCloseHourThur(event.target.value)}}/>
                                </div>

                            </div>
                            <div className="row align-items-start">

                                <div className="col">
                                    <label> Open Hour Friday </label>
                                    <input className="form-control" type="time" value={openHourFri} onChange={(event)=> {setOpenHourFri(event.target.value)}}/>

                                </div>

                                <div className="col">
                                    <label> Close Hour Friday </label>
                                    <input className="form-control" type="time" value={closeHourFri} onChange={(event)=> {setCloseHourFri(event.target.value)}}/>
                                </div>

                            </div>
                            <div className="row align-items-start">

                                <div className="col">
                                    <label> Open Hour Satday </label>
                                    <input className="form-control" type="time" value={openHourSat} onChange={(event)=> {setOpenHourSat(event.target.value)}}/>

                                </div>

                                <div className="col">
                                    <label> Close Hour Satday </label>
                                    <input className="form-control" type="time" value={closeHourSat} onChange={(event)=> {setCloseHourSat(event.target.value)}}/>
                                </div>

                            </div>
                            <div className="row align-items-start">

                                <div className="col">
                                    <label> Open Hour Sunday </label>
                                    <input className="form-control" type="time" value={openHourSun} onChange={(event)=> {setOpenHourSun(event.target.value)}}/>

                                </div>

                                <div className="col">
                                    <label> Close Hour Sunday </label>
                                    <input className="form-control" type="time" value={closeHourSun} onChange={(event)=> {setCloseHourSun(event.target.value)}}/>
                                </div>

                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success" data-bs-toggle="modal" onClick={onClick}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default EditCourtModal;