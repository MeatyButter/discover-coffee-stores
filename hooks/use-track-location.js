import { useState } from "react"

// Create the hook function 
const useTrackLocation = () => {
    // Set states to be stored
    const [locationErrorMsg, setLocationErrorMsg] = useState('');
    const [latLong, setLatLong] = useState('');

    // Success function
    const success = (position) => {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Set the lat long to be passed
        setLatLong(`${latitude},${longitude}`);

        // Clear error message incase there are any issues
        setLocationErrorMsg('');
    }

    // Error function
    const error = () => {
        setLocationErrorMsg('Unable to retrieve your location');
    }

    // Function to trigger in the front end
    const handleTrackLocation = () => {
        if (!navigator.geolocation) {
            setLocationErrorMsg('Geolocation is not supported by your browser');
        } else {
            // status.textContent = 'Locating…';
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }

    return {
        latLong,
        handleTrackLocation,
        locationErrorMsg,
    }

}

export default useTrackLocation;