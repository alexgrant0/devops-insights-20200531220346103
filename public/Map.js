var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        })
        
        function addMarker(props){
        	var marker = new google.maps.Marker({
        		position: props.coords,
        		map: map        		
        	})
        }
        
        google.maps.event.addListener(map, 'click', function(event){
        	addMarker({coords:event.latLng})
        })
      }