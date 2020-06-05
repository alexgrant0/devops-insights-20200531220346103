var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'',
  database:'CityDB'
});

connection.connect(function(error) {
  if(!!error){
    console.log('error');
  }
  else{
    console.log('connected');
  }
})
app.get('/', function(req, resp){

  connection.query("SELECT * FROM cityTable", function(error, rows, fields) {
    if(!!error){
      console.log('Error in the query');

    }
    else{
        console.log('Success');
        if(rows[0] !== undefined){
          var long = rows[0].lng;
          var lat = rows[0].lat;
        }
        
    }
  })

})
app.listen(1337);

function initMap(){
  var options = {
    zoom: 7,
    center:{lat:-37.78333,lng:175.28333}
  }
  var map = new google.maps.Map(document.getElementById('map'), options);
  console.log(weatherData);
  window.localStorage.setItem('weather', weatherData);

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
  	
  	const Http = new XMLHttpRequest();
    const url='https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=metric&lat=' + lat + '&lon=' + long;
    Http.open("GET", url);
    Http.send();
	
    Http.onreadystatechange = (e) => {
      window.localStorage.setItem('weather', Http.responseText);
      document.getElementById('usr').value = JSON.parse(Http.responseText).name;
      document.getElementById('usr').focus();
    }
  }  
}


