import React, {useEffect, useState} from 'react';
import "../Admin/AdminProfile";
import "../../pages/AdminProfilePage"
import {get, post} from "../../utils/http";
import CourtCard from "../Admin/CourtCard";
import "./Home.css"
import {FilterModal} from "./FilterModal";
import AddBalanceModal from "./AddBalanceModal";
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import AddCourtModal from "../Admin/AddCourtModal";
import {useParams} from "react-router-dom";
const Home = () => {

    const [search, setSearch] = useState('')
    const [courts, setCourts] = useState([])
    const[allCourts, setAllCourts]= useState([])
    const[locationCourts, setLocationCourts]= useState([])
    const [sport, setSport] = useState(null)
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const[price, setPrice] = useState(999999)
    const [refresh, setRefresh] = useState(true)
    const [radius, setRadius] = useState(100)
    const[center, setCenter] = useState({lat:0,lng:0})


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
   const changeRadius = e =>{
       setRadius(e)
   }
   const changeCenter = e => {
       setCenter(e)
   }
   const changePrice = e => {
        setPrice(e)
    };
    const toggleRefresh=()=>{
        setRefresh(!refresh)
    }
    function filterCourts(courts) {
        let courtsAux=[]
        allCourts.map(court=> {
            if (court.name.toLowerCase().includes(search.toLowerCase())&& locationCourts.length<=0) {
                courtsAux.push(court)
            } else if (locationCourts.length>=0){
                locationCourts.map(court2 =>{
                    if (court2._id === court._id && court.name.toLowerCase().includes(search.toLowerCase())){
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
            }
        })
        setCourts(courtsAux)

    }
    function filterByTime(startDate, endDate) {
       startDate= Date.parse(startDate.toString())
        endDate = Date.parse(endDate.toString())
        post('dashboard/availability', {startDate,endDate},{options: {withCredentials: true}}).then(data=>{
            console.log(data)
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

    function filterByLocation() {
        post('dashboard/location', {coordinateX:center.lat,coordinateY:center.lng,radius},{options: {withCredentials: true}}).then(data=>{
            setLocationCourts(data.result || [])})
    }

    useEffect(()=>{
        filterByLocation()
    },[center,radius])

    const filterModal = FilterModal({changeSport,changeEndDate,changeStartDate,changePrice,toggleRefresh,changeRadius,changeCenter,radius})
    const addBalanceModal = AddBalanceModal()
        return(
        <div className="courtsBox">
            <div>
                <div className="courts-search-modals-container">

                    <div className="courts-search-container">
                        <div style={{display: 'flex', justifyContent: 'space-evenly',alignItems: 'center'}}>
                            <div className="filter-container">
                                {filterModal}
                            </div>
                            <div className="search-container">
                                <input className="searchCourt" placeholder="search court" type="text" onChange={(ev)=> setSearch(ev.target.value)}/>
                                <SearchTwoToneIcon/>
                            </div>
                            <div className='add-balance-container'>
                                {addBalanceModal}
                            </div>
                        </div>

                        <div className="courtsBoxClient">
                            {
                                courts.map((court)=> <CourtCard court={court} userMode={true} profileMode={false}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
