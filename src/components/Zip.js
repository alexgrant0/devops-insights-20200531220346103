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
            
            <html>
			  <head>
			    <title>Simple Map</title>
			    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
			    <script
			      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBbZSDbWTExhP6Ojrqi08miAFk4Bh_51C0&callback=initMap&libraries=&v=weekly"
			      defer
			    ></script>
			    <style type="text/css">
			      /* Always set the map height explicitly to define the size of the div
			       * element that contains the map. */
			      map {
			        height: 100%;
			      }
			
			      /* Optional: Makes the sample page fill the window. */
			      html,
			      body {
			        height: 100%;
			        margin: 0;
			        padding: 0;
			      }
			    </style>
			    <script>
			      (function(exports) {
			        "use strict";
			
			        function initMap() {
			          exports.map = new google.maps.Map(document.getElementById("map"), {
			            center: {
			              lat: -34.397,
			              lng: 150.644
			            },
			            zoom: 8
			          });
			        }
			
			        exports.initMap = initMap;
			      })((this.window = this.window || {}));
			    </script>
			  </head>
			  <body>
			    <div id="map"></div>
			  </body>
			</html>
            
        </div>
    );
}

export default Zip