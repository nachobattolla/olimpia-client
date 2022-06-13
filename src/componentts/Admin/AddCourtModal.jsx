import React, {useCallback, useState} from 'react';
import "../../pages/AdminCourtsPage"
import {IoAdd} from "@react-icons/all-files/io5/IoAdd";
import {GiSoccerField} from "@react-icons/all-files/gi/GiSoccerField";
import AdminCourts from "../AdminCourts";
import {post} from "../../utils/http";


const AddCourtModal = ({onNewCourt}) => {
    const [name, setName] = useState('')
    const [sport, setSport] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
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
                    coordinates: [14,32],
                },
                sport,
                description,
                price: parseInt(price),
            }, {
                options: {withCredentials: true}
            }
            )
            onNewCourt()
            console.log(res)
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
                            <input className="form-control" value={name} onChange={(event)=> {setName(event.target.value)}}></input>
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
                            <label> Location </label>
                            <input className="form-control" value={location} onChange={(event)=> {setLocation(event.target.value)}}></input>
                            <label> Description </label>
                            <input className="form-control" value={description} onChange={(event)=> {setDescription(event.target.value)}}></input>
                            <label> Hourly price </label>
                            <input className="form-control" type="number" value={price} onChange={(event)=> {setPrice(event.target.value)}}></input>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success" onClick={()=> onClick()}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default AddCourtModal