import React, {useCallback, useState} from 'react';
import "../../pages/AdminCourtsPage"
import {IoAdd} from "@react-icons/all-files/io5/IoAdd";
import {GiSoccerField} from "@react-icons/all-files/gi/GiSoccerField";
import AdminCourts from "./AdminCourts";
import {post} from "../../utils/http";
import NewContainerMap from "../Shared/NewMapContainer";


const AddCourtModal = ({onNewCourt}) => {
    const [name, setName] = useState('')
    const [sport, setSport] = useState('')
    const [location, setLocation] = useState([])
    const [address, setAddress] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState()
    const [openHourMon,setOpenHourMon] = useState("09:00")
    const [closeHourMon,setCloseHourMon] = useState("22:00")
    const [openHourTue,setOpenHourTue] = useState("09:00")
    const [closeHourTue,setCloseHourTue] = useState("22:00")
    const [openHourWed,setOpenHourWed] = useState("09:00")
    const [closeHourWed,setCloseHourWed] = useState("22:00")
    const [openHourThur,setOpenHourThur] = useState("09:00")
    const [closeHourThur,setCloseHourThur] = useState("22:00")
    const [openHourFri,setOpenHourFri] = useState("09:00")
    const [closeHourFri,setCloseHourFri] = useState("22:00")
    const [openHourSat,setOpenHourSat] = useState("09:00")
    const [closeHourSat,setCloseHourSat] = useState("22:00")
    const [openHourSun,setOpenHourSun] = useState("09:00")
    const [closeHourSun,setCloseHourSun] = useState("22:00")
    const [view, setView] = useState(false)


    // function toggleModal() {
    //     setView(!view);
    // }

    const onClick = useCallback( async ()=>{
        try {
            const res = await post('adminDashboard/add-court', {
                name,
                location: {
                    type: 'Point',
                    coordinates: location,
                },
                address,
                sport,
                description,
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

            }, {
                options: {withCredentials: true}
            }
            )
            onNewCourt()
            // toggleModal()
        } catch (e) {

        }

    })

    return (
        <div className= "container-fluid">
            <div className="btn rounded-pill btn-outline-success bg-primary pe-5" data-bs-toggle="modal" data-bs-target="#new-modal" >
                <IoAdd size={40}/>
                <GiSoccerField size={40}/>
            </div>
            <div className="modal fade" id="new-modal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">ADD COURT TO ESTABLISHMENT</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <label> Name </label>
                            <input className="form-control" value={name} onChange={(event)=> {setName(event.target.value)}}/>
                            <label className="m-2"> Sport </label>
                            <div className="my-3">
                            <select className="form-select" aria-label="Default select example" value={sport} onChange={(event)=> {setSport(event.target.value)}}>
                                <option selected>--------------------------------------------------------------------------</option>
                                <option value="Football">Football</option>
                                <option value="Basketball">Basketball</option>
                                <option value="Tennis">Tennis</option>
                                <option value="Paddle">Paddle</option>
                            </select>
                            </div>
                            <div>
                                <label> Location </label>
                                <input className="form-control" value={address} onChange={(event)=> {setAddress(event.target.value)}}/>
                                <NewContainerMap setLocation={setLocation} address={address}/>
                            </div>
                            <br/>
                            <label> Description </label>
                            <input className="form-control" value={description} onChange={(event)=> {setDescription(event.target.value)}}/>
                            <label> Hourly price </label>
                            <input className="form-control" type="number" value={price} onChange={(event)=> {setPrice(event.target.value)}}/>

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
                            <button type="button" className="btn btn-success" data-bs-toggle="modal" onClick={()=> onClick()}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default AddCourtModal