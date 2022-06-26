import React, {useEffect, useState} from 'react';
import "../Admin/AdminProfile";
import "../../pages/AdminProfilePage"
import {get, post} from "../../utils/http";
import CourtCard from "../Admin/CourtCard";
import "./Home.css"
import {FilterModal} from "./FilterModal";

const Home = () => {

    const [search, setSearch] = useState('')
    const [courts, setCourts] = useState([])
    const[allCourts, setAllCourts]= useState([])
    const [sport, setSport] = useState(null)
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const[price, setPrice] = useState(999999)
    const [refresh, setRefresh] = useState(true)

     const changeSport = e => {
        setSport(e)
    };
    const changeEndDate = e => {
        console.log("0")
        setEndDate(e)
    };
   const changeStartDate = e => {
       console.log("0")
        setStartDate(e)
    };
   const changePrice = e => {
        setPrice(e)
    };
    const toggleRefresh=()=>{
        setRefresh(!refresh)
    }
    function filterCourts(courts) {
        let courtsAux=[]
        console.log(price)
        allCourts.map(court=> {

            if (court.name.toLowerCase().includes(search.toLowerCase())) {
                if ((court.price <= price || isNaN(price)) && sport == null) {
                    courtsAux.push(court)
                }
                if ((court.price <= price || isNaN(price)) && sport != null) {
                    if (court.sport == sport) {
                        courtsAux.push(court)
                    }
                }
            }
        })
        setCourts(courtsAux)

    }
    function filterByTime(startDate, endDate) {
       startDate= Date.parse(startDate.toString())
        endDate = Date.parse(endDate.toString())
        post('dashboard/availability', {startDate,endDate},{options: {withCredentials: true}}).then(data=>{
            console.log(data)
            setCourts(data.fieldsAux || [])
            setAllCourts(data.fieldsAux || [])})
    }

    useEffect(()=> {
        get('dashboard/courts', {options: {withCredentials: true}}).then(data=>{
            setCourts(data || [])
            setAllCourts(data || [])})
    }, [])

    useEffect(()=>{
        filterCourts(courts)
    },[refresh,search])

    useEffect(()=>{

        if (endDate != null && startDate!= null){
            filterByTime(startDate,endDate)

        }
    },[endDate,startDate])

    const filterModal = FilterModal({changeSport,changeEndDate,changeStartDate,changePrice,toggleRefresh})
    return (
        <div>
            {filterModal}
            <div>
                <input className="searchCourt" placeholder="search court" type="text" onChange={(ev)=> setSearch(ev.target.value)}/>
            </div>
            <div className="courtsBoxClient">
                <div>
                {
                    courts.map((court)=> <CourtCard court={court} userMode={true} profileMode={false}/>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;
