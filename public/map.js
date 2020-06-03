import React, { useState } from 'react';
import AppContainer from '../src/containers/AppContainer';

function initMap(){
  var options = {
    zoom: 7,
    center:{lat:-37.78333,lng:175.28333}
  }
  var map = new google.maps.Map(document.getElementById('map'), options);

  google.maps.event.addListener(map, 'click', function(event){
    addMarker({coords:event.latLng});
    var latitude = event.latLng.lat();
    var longitude = event.latLng.lng();
    getCoordsData(latitude, longitude);
  });
  
  function getCoordsData(lat, lng){
  	
  	const [responseData, setResponseData] = useState('');
  	
  	const handleZipChange = async () => {
        //console.log(`--------- fetchData called zip:${zipValue}`)
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=metric&lat=${lat}&lon=${lng}`)
        const json = await res.json()
        //console.log(json);
        setResponseData(json);
    }
    
    const clearResponse = () => {
        setResponseData('');
    }
    
    return (
    	<div className="row mt-4">
            <div className="col-sm-2"></div>
            <ZipResponse responseData={responseData} clearResponse={clearResponse}/>
            <div className="col-sm-2"></div>
        </div>
    )
  }
  

	var marker;

  function addMarker(props){
    
    if (!marker || !marker.setPosition) {
	    marker = new google.maps.Marker({
	      position:props.coords,
	      map:map
	    });
	} else {
		marker.setPosition(props.coords);
	}

  }
}

