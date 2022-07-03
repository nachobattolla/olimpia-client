import React from'react';
const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`
const MapConteiner=(props)=> {


return(
    <div>
        <Map
            googleMap={mapURL}
            containerElement={<div style={{height:'400px'}}/>}
            mapElement={<div style={{height:'100%'}}/>}
                loadingElement={<p>Loading</p>}
        />
    </div>
    )
}

