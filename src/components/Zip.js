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
    	<script src='https://api.mapbox.com/mapbox-gl-js/v0.44.1/mapbox-gl.js'></script>
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
                <div className="text-danger small"> { validationError } </div>
            </div>
            <div id='map'></div>
            <script>
            	mapboxgl.accessToken = 'pk.eyJ1IjoiZXF1aW5uMTAiLCJhIjoiY2lxdjFpa3M1MDBlY2Zzbmh3Mjk1MTl1NSJ9.JJwjExkgWnX3QUNiN8c_9Q';
				var map = new mapboxgl.Map({
									  container: 'map', // HTML container id
									  style: 'mapbox://styles/mapbox/streets-v9', // style URL
									  center: [-21.9270884, 64.1436456], // starting position as [lng, lat]
									  zoom: 13
									});

            </script>
        </div>
    );
}

export default Zip