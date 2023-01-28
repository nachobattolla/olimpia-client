import React, {useEffect, useState} from 'react'
import {GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import Geocode from "react-geocode";
import { useGeolocated } from "react-geolocated";
import { Circle } from '@react-google-maps/api'
const containerStyle = {
    width: '450px',
    height: '300px',
    left: '10px',
    top: '10px'
};

const API_KEY = process.env.REACT_APP_API_KEY

function NewContainerMap(props) {
    console.log("PROPS: "+ props.coordinates)
    useEffect(()=>{
        let options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        function success(pos) {
            let crd = pos.coords;

            setCenter({
                lat: crd.latitude,
                lng: crd.longitude
            })
        };

        function error(err) {
            console.warn('ERROR(' + err.code + '): ' + err.message);
        };

        navigator.geolocation.getCurrentPosition(success, error, options);
    },[])
    const [coordinates, setCoordinates] = useState(null)
    const[center, setCenter] = useState({
        lat: -34.45560912790846,
        lng: -58.858892611731875,
    })
    const[x,setX]= useState()
    const[y,setY]= useState()

    Geocode.setApiKey(API_KEY);

    Geocode.setLanguage("en");

    Geocode.setRegion("ar");

    Geocode.setLocationType("ROOFTOP");

    Geocode.enableDebug();

    const addMarker = (latLng,x,y) => {
        const location = {lat: latLng.lat(), lng: latLng.lng()}
        console.log("location:" + location)
        console.log(location.lat)
        console.log(location.lng)
        setCoordinates(location)
        setX(x)
        setY(y)
        props.setLocation([x,y])
    }
    useEffect(()=>{
        if (props.coordinates){
            setCoordinates(props.coordinates)
        }
    },[props.coordinates])
    useEffect(()=> {
        console.log("props.input:  " + props.address)
        Geocode.fromAddress(props.address).then(
            (response) => {
                const { lat, lng } = response.results[0].geometry.location;
                setX(lat)
                setX(lng)
                props.setLocation([lat,lng])
                setCoordinates({lat,lng}  )
                setCenter({lat,lng})
            },
            (error) => {
                console.error(error);
            }
        );
    },[props.address])
    useEffect(()=>{
        if (props.changeCenter){
            props.changeCenter(center)
        }
    },[center])

    return (
        <div>
        <LoadScript
            googleMapsApiKey = {API_KEY}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onClick={e=>{
                    addMarker(e.latLng,e.pixel.x,e.pixel.y)
                }}
            >
                {
                    coordinates ?
                        <Marker position={coordinates}/> : null
                },

                {
                    props.radius?
                    <Circle center={center} radius={parseInt(props.radius)*1000} />: null
                }

            </GoogleMap>
        </LoadScript>
        </div>
    )
}
export default NewContainerMap