import Geolocation from '@react-native-community/geolocation';
import { useEffect, useState } from 'react';
import { LatLng } from 'react-native-maps';

export const useGeoLocation = () => {
    const [location, setLocation] = useState<LatLng>({ latitude: 0, longitude: 0 });
    const [errorLocation, setErrorLocation] = useState("");

    useEffect(() => {
        Geolocation.getCurrentPosition(
            response => {
                const { latitude, longitude } = response.coords;
                setLocation({ latitude, longitude });
            },
            error => setErrorLocation(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    }, []);

    return { location, errorLocation, setLocation };
}
