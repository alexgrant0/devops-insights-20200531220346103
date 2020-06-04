import React, { useState } from 'react';

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
}

function getCoordsData(lat, lng){
	
	var url = 'https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=metric&lat=${lat}&lon=${lng}';
  	
  	function httpGetAsync(url, returnTable)
	{
	    var xmlHttp = new XMLHttpRequest();
	    xmlHttp.onreadystatechange = function() { 
	        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
	            callback(xmlHttp.responseText);
	    }
	    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
	    xmlHttp.send(null);
	}
    
    
}

function returnTable(responsedata){
	
	return (
    	<div className="row mt-4">
            <div className="col-sm-2"></div>
            <ZipResponse responseData={responseData}/>
            <div className="col-sm-2"></div>
        </div>
    )
}