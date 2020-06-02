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
	        <div/>
	            
	            <div id="map"></div>
	            
				            // Create the script tag, set the appropriate attributes
				var script = document.createElement('script');
				script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
				script.defer = true;
				script.async = true;
				
				// Attach your callback function to the `window` object
				window.initMap = function() {
				  // JS API is loaded and available
				};
				
				// Append the 'script' element to 'head'
				document.head.appendChild(script);
				
				
				map = new google.maps.Map(document.getElementById('map'), {
				  center: {lat: -34.397, lng: 150.644},
				  zoom: 8
				});
	            
	    </div>
    );
}

export default Zip