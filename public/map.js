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
    createConnection();
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
  }  
}

function createConnection(){
	var db2id = {
	  "db": "BLUDB",
	  "dsn": "DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net;PORT=50000;PROTOCOL=TCPIP;UID=mrb12002;PWD=hl8h@gf2194zdvqf;",
	  "host": "dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net",
	  "hostname": "dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net",
	  "https_url": "https://dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net",
	  "jdbcurl": "jdbc:db2://dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net:50000/BLUDB",
	  "parameters": {},
	  "password": "hl8h@gf2194zdvqf",
	  "port": 50000,
	  "ssldsn": "DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net;PORT=50001;PROTOCOL=TCPIP;UID=mrb12002;PWD=hl8h@gf2194zdvqf;Security=SSL;",
	  "ssljdbcurl": "jdbc:db2://dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net:50001/BLUDB:sslConnection=true;",
	  "uri": "db2://mrb12002:hl8h%40gf2194zdvqf@dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net:50000/BLUDB",
	  "username": "mrb12002"
	}
	
	var api = '/dbapi/v3';
	var host = 'https://dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net' + api;
	
	var userinfo = {
		"userid" : "mrb12002",
		"password" : "hl8h@gf2194zdvqf"
	}
	
	const userAction = async () => {
	  const response = await fetch(host, {
	    method: 'POST',
	    body: userInfo
	  });
	  const myJson = await response.json();
	  console.log(myJson);
	}
	
	
}

