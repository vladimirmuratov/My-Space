import {Image, Text, View, StyleSheet} from "react-native";
import {globalStyle} from "../styles/globalStyle";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {dayOfWeek} from "../config";

export const CardWeatherPage = (props) => {
    const {city, dt, temp, weather} = props
    let {day: temperature} = temp
    temperature = Math.round(temperature)
    const symbol = temperature > 0 ? '+' : ''
    const description = weather[0].description
    const icon = weather[0].icon
    const today = new Date().toLocaleDateString() === new Date(dt * 1000).toLocaleDateString()
    const day = dayOfWeek[new Date(dt * 1000).getDay()]
    const date = new Date(dt * 1000).toLocaleDateString("ru-RU")

    return (
        <View style={[globalStyle.bgPageItem, styles.wrapper]}>
            <Image
                source={{uri: `https://openweathermap.org/img/wn/${icon}@2x.png`}}
                style={styles.image}
            />
            <View style={{justifyContent: 'space-evenly'}}>
                {today
                    ? <Text
                        style={[styles.day, {color: 'red'}]}>{`сегодня, ${day}, ${date}`}</Text>
                    : <Text style={styles.day}>{`${day}, ${date}`}</Text>
                }
                <Text style={styles.city}>{city}</Text>
                <Text style={styles.desc}>{description}</Text>
                <Text style={styles.temp}>
                    {symbol}
                    {temperature}
                    <MaterialCommunityIcons name="temperature-celsius" size={24} color="#424242"/>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        marginBottom: 10
    },
    day: {
        fontSize: 16,
        color: '#616161'
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
