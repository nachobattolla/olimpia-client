import React, {useCallback, useState} from 'react';
import "../pages/AdminCourtsPage"
import {IoAdd} from "@react-icons/all-files/io5/IoAdd";
import {GiSoccerField} from "@react-icons/all-files/gi/GiSoccerField";
import AdminCourts from "./AdminCourts";
import {get, post} from "../utils/http";

const EditCourtModal  = ({courtData,onEdit}) => {
    const [name, setName] = useState(courtData.name)
    const [sport, setSport] = useState(courtData.sport)
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState(courtData.description)
    const [price, setPrice] = useState(courtData.price)

    console.log(courtData)
    console.log(name,sport)
    const onClick = useCallback(()=> {
        const newCourtData = {name, sport, location:  {
                type: 'Point',
                coordinates: [14,32],
            }, description, price: parseInt(price)}
        post('adminDashboard/edit-court',newCourtData , {options: {withCredentials: true}}).then(()=> {
            onEdit(newCourtData)
        })
    })

    return (
        <>
            <div className="btn rounded-pill btn-outline-success bg-primary pe-5" data-bs-toggle="modal" data-bs-target="#new-edit-modal" >
                Edit
            </div>
            <div className="modal fade" id="new-edit-modal" tabIndex="-1">
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
                            <label> Location </label>
                            <input className="form-control" value={location} onChange={(ev)=> setLocation(ev.target.value)}/>
                            <label> Description </label>
                            <input className="form-control" value={description} onChange={(ev)=>setDescription(ev.target.value)}/>
                            <label> Hourly price </label>
                            <input type="number" className="form-control" value={price} onChange={(ev)=>setPrice(ev.target.value)}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success" onClick={onClick}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default EditCourtModal;