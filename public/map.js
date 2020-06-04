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
  	
  	const Http = new XMLHttpRequest();
	const url='https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=metric&lat=' + lat + '&lon=' + long;
	Http.open("GET", url);
	Http.send();
	
	Http.onreadystatechange = (e) => {
		console.log(Http.responseText);
		window.localStorage.setItem('weather', Http.responseText);		
	}
	
	return (
            <div className="col-sm-8">
                <table className="table table-info table-hover">
                    <tbody>
                        <tr>
                            <td>City</td>
                            <td>{Http.responseText.name}</td>
                        </tr>
                        <tr>
                            <td>Temperature</td>
                            <td>{Http.responseText.main.temp}</td>
                        </tr>
                        <tr>
                            <td>Pressure</td>
                            <td>{Http.responseText.main.pressure}</td>
                        </tr>
                        <tr>
                            <td>Humidity</td>
                            <td>{Http.responseText.main.humidity}</td>
                        </tr>
                        <tr>
                            <td>Temperature (Min)</td>
                            <td>{Http.responseText.main.temp_min}</td>
                        </tr>
                        <tr>
                            <td>Temperature (Max)</td>
                            <td>{Http.responseText.main.temp_max}</td>
                        </tr>
                        <tr>
                            <td>Conditions</td>
                            <td>{Http.responseText.weather[0].description}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
	)
  }
  
  
}