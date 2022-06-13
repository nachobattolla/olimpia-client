import React, {useEffect, useState} from 'react';
import "../Admin/AdminProfile";
import "../../pages/AdminProfilePage"
import {get} from "../../utils/http";
import CourtCard from "../Admin/CourtCard";
import "./Home.css"

const Home = () => {
    const [search, setSearch] = useState('')

    const [courts, setCourts] = useState([])

    useEffect(()=> {
        get('dashboard/courts', {options: {withCredentials: true}}).then(data=>setCourts(data || []))
    }, [])

    return (
        <div>
            <div>
                <input type="text" onChange={(ev)=> setSearch(ev.target.value)}/>
            </div>
            <div className="courtsBoxClient">
                <div>
                {
                    courts?.filter(({name})=> name.includes(search)).map((court)=> <CourtCard court={court} userMode={true}/>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;