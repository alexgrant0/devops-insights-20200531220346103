import React, { useState } from 'react';

function Zip(props) {

    const [validationError, setValidationError] = useState(null);

    const validate = (event) => {
        const cityCodePattern = /^[A-Za-z]+$/;
        const valid = cityCodePattern.test(event.target.value);
        if (!valid) {
            setValidationError('Enter a valid city name');
            props.clearResponse();
        } else {
            setValidationError('');
            props.onZipChange(event.target.value);
        }
    };

    return (
	    <div>
	        <div className="col-sm-4">
	            <div className="row">
	                <div className="col-sm-10">
	                    <style jsx="true">{`
	                        .form-control::-webkit-input-placeholder {
	                            color: #ddd;
	                        }
	                    `}
	                    </style>
	                    <input 
	                        type="text" 
	                        className="form-control" 
	                        id="usr" 
	                        placeholder="NZ City Name"
	                        onKeyPress={(event) => {
	                            if (event.key === "Enter") {
	                                validate(event);
	                            }
	                        }}
	                    ></input>   
	                </div>
	            </div>
	            <div className="pl-3 row">
	                <div className="text-danger small">{ validationError }</div>
	            </div>
	        </div>
	        
			<div>
				<head>
				    <title>Simple Map</title>
				    <meta name="viewport" content="initial-scale=1.0">
				    <meta charset="utf-8">
				    <style>
				      /* Always set the map height explicitly to define the size of the div
				       * element that contains the map. */
				      #map {
				        height: 100%;
				      }
				      /* Optional: Makes the sample page fill the window. */
				      html, body {
				        height: 100%;
				        margin: 0;
				        padding: 0;
				      }
				    </style>
				  </head>
				  <body>
				    <div id="map"></div>
				    <script>
				      var map;
				      function initMap() {
				        map = new google.maps.Map(document.getElementById('map'), {
				          center: {lat: -34.397, lng: 150.644},
				          zoom: 8
				        });
				      }
				    </script>
				    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
				    async defer></script>
				  </body>
			</div>
	        
	    </div>
    );
}

export default Zip