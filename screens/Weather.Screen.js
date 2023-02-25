import {ActivityIndicator, Alert, FlatList, View} from "react-native";
import {globalStyle} from "../styles/globalStyle";
import {useStore} from "../store";
import {CardWeatherPage} from "../components/CardWeatherPage";

export const WeatherScreen = () => {
    const {weather, error, loading} = useStore(state => state)
    const {city, daily} = weather


    return (
        <View style={globalStyle.container}>
            <ActivityIndicator animating={loading} style={globalStyle.loader} size="large"/>
            {error
                ? Alert.alert(error, 'Try again later', [
                    {text: 'OK'}
                ])
                : null
            }
            <FlatList
                keyExtractor={item => item.dt}
                data={daily}
                renderItem={({item}) => <CardWeatherPage city={city} {...item}/>}
            />
        </View>
    )
}
