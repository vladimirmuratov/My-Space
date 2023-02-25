import {Text, View, StyleSheet, Image, Alert} from "react-native";
import {globalStyle} from "../styles/globalStyle";
import {useStore} from "../store";
import {MaterialCommunityIcons} from '@expo/vector-icons';

export const WeatherScreen = () => {
    const {weather, error} = useStore(state => state)
    const {city, description, icon, temp} = weather
    let temperature = temp ? Math.round(temp) : ''

    if (temperature && temperature > 0) {
        temperature = `+${temperature}`
    }


    return (
        <View style={globalStyle.container}>
            {error
                ? Alert.alert(error, 'Try again later', [
                    {text: 'OK'}
                ])
                : null
            }
            <View style={[globalStyle.bgPageItem, styles.wrapper]}>
                <Image
                    source={{uri: `https://openweathermap.org/img/wn/${icon}@2x.png`}}
                    style={styles.image}
                />
                <View style={{justifyContent: 'space-evenly'}}>
                    <Text style={styles.city}>{city}</Text>
                    <Text style={styles.desc}>{description}</Text>
                    <Text style={styles.temp}>
                        {temperature}
                        {temperature
                            ? <MaterialCommunityIcons name="temperature-celsius" size={24} color="#424242"/>
                            : ''
                        }
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
    },
    image: {
        width: 120,
        height: 120
    },
    city: {
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1,
        color: '#616161'
    },
    desc: {
        fontSize: 18,
        fontWeight: '400',
        color: '#616161'
    },
    temp: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#424242'
    },
})
