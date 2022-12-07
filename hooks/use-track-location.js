import { useContext, useState } from "react"
import { ACTION_TYPES, StoreContext } from "../store/store-context"

// Create the hook function 
const useTrackLocation = () => {
    // Set states to be stored
    const [locationErrorMsg, setLocationErrorMsg] = useState('');
    // const [latLong, setLatLong] = useState('');
    const [isFindingLocation, setIsFindingLocation] = useState(false);

    const {dispatch} = useContext(StoreContext)

    // Success function
    const success = (position) => {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Set the lat long to be passed
        // setLatLong(`${latitude},${longitude}`);
        dispatch({
            type: ACTION_TYPES.SET_LAT_LONG,
            payload: {latLong: `${latitude},${longitude}`}
        })

        // Clear error message incase there are any issues
        setLocationErrorMsg('');
        setIsFindingLocation(false);
    }

    // Error function
    const error = () => {
        setIsFindingLocation(false);
        setLocationErrorMsg('Unable to retrieve your location');
    }

    // Function to trigger in the front end
    const handleTrackLocation = () => {
        setIsFindingLocation(true);

        if (!navigator.geolocation) {
            setLocationErrorMsg('Geolocation is not supported by your browser');
            setIsFindingLocation(false);
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }

    return {
        // latLong,
        handleTrackLocation,
        locationErrorMsg,
        isFindingLocation
    }

}

export default useTrackLocation;