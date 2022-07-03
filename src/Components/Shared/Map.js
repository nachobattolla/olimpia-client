import {
    GoogleMap,
    withScriptjs,
    withGoogleMap
}from '@react-google-maps/api'
const Map = (props) =>{
    return(
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{lat: -34, lng:150}}
            />
    )
}