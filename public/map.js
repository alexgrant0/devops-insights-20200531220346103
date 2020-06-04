import React, { useState } from 'react';
import ZipResponse from '../src/components/ZipResponse';

function initMap(){
  var options = {
    zoom: 7,
    center:{lat:-37.78333,lng:175.28333}
  }
  var map = new google.maps.Map(document.getElementById('map'), options);

  google.maps.event.addListener(map, 'click', function(event){
    addMarker({coords:event.latLng});
    var myLatLng = event.latLng;
    var lat = myLatLng.lat();
    var lng = myLatLng.lng();
    getInformation(lat, lng);
  })  
	
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
  
  function getInformation(lat, long){
  	const [responseData, setResponseData] = useState('');
  	const clearResponse = () => {
        setResponseData('');
    }
  	
  	const Http = new XMLHttpRequest();
	const url='https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=metric&lat=' + lat + '&lon=' + long;
	Http.open("GET", url);
	Http.send();
	
	Http.onreadystatechange = (e) => {
		console.log(Http.responseText);
		setResponseData(JSON.parse(Http.responseText);
		return (
            <div className="row mt-4">
                <div className="col-sm-2"></div>
                <ZipResponse responseData={responseData} clearResponse={clearResponse}/>
                <div className="col-sm-2"></div>
            </div>
    	);
	}
  }
  
  
}