import React, {useEffect, useState} from 'react';
import "../../pages/AdminCourtsPage"
import AddCourtModal from "./AddCourtModal";
import CourtCard from "./CourtCard";
import {get} from "../../utils/http";
import "./AdminCourts.css";

const AdminCourts = () => {

    const [courts, setCourts] = useState([])
    const [selectedCourt, setSelectedCourt] = useState({})

    const [refresh, setRefresh] = useState(true)

    useEffect(()=> {
        get('adminDashboard/my-courts', {options: {withCredentials: true}}).then(
            data=>{
                console.log(data)
                setCourts(data || [])
                console.log(courts)
            })
    }, [refresh])

    return (
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col-2">
                    <div className="bg-transparent justify-content-star">
                        <AddCourtModal onNewCourt={()=> {setRefresh(!refresh)}}/>
                    </div>
                </div>
                <div className="col-10">
                    <div className= "courtsBox">
                        <label className="justify-content-center">MY COURTS</label>
                        {
                            courts.map((el)=> <CourtCard court={el} onDeleteCourt={()=> {setRefresh(!refresh)}} onEditCourt={()=> {setRefresh(!refresh)}} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );

}

export default AdminCourts