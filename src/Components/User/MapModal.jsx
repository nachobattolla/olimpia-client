import React, {useEffect, useState} from "react";
import {createPayment} from "../../utils/MercadoPagoQuery";
import {get} from "../../utils/http";
import PlaceTwoToneIcon from '@mui/icons-material/PlaceTwoTone';
import NewMapContainer from "../Shared/NewMapContainer";

const MapModal = (props) => {
    return(
        <>
            <div className="btn rounded-pill btn-outline-success bg-primary pe-5" data-bs-toggle="modal" data-bs-target="#new-edit-modal2" >
                Map
                <PlaceTwoToneIcon/>
            </div>
            <div className="modal fade" id="new-edit-modal2" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content text-center">
                        <div className="modal-header text-success ">
                            <h4 className="modal-title">LOCATION</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <NewMapContainer coordinates = {props.coordinates}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MapModal