import {Navigate} from "./navigate";
import {useEffect} from "react";
import {useStore} from "./store";
import * as Location from 'expo-location';

export default function App() {
    const {fetchWeather, fetchCurrency, fetchNotes} = useStore(state => state)

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log(('Permission to access location was denied'));
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            const lat = location.coords.latitude
            const lon = location.coords.longitude
            if(lat && lon){
                await fetchWeather(lat, lon)
            }
        })()

        fetchCurrency()
        fetchNotes()

    }, []);

    return <Navigate/>
}
