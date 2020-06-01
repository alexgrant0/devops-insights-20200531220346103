import React, { useState } from 'react';

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDH0nDKBFWMPyMxcj8JxtOSgGK6S1YApoc&callback=initMap" async defer></script>

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
            <div>
            	<script>
	            	var map;
			     	function initMap() {
			    		map = new google.maps.Map(document.getElementById('map'), {
			          		center: {lat: -34.397, lng: 150.644},
			          		zoom: 8
			     		})
			      	}
			    </script>
            </div>
        </div>
    );
}

export default Zip