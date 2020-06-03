function initMap(){
  var options = {
    zoom: 7,
    center:{lat:-36.8485,lng:174.7633}
  }
  var map = new google.maps.Map(document.getElementById('map'), options);

  google.maps.event.addListener(map, 'click', function(event){
    addMarker({coords:event.latLng});
    var clickedLocation = event.latLng;
  });


  function addMarker(props){
    var marker = new google.maps.Marker({
      position:props.coords,
      map:map
    });
  }
}