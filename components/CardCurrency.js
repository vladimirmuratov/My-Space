import {View, StyleSheet, Text} from "react-native";
import {Entypo, FontAwesome} from "@expo/vector-icons";

export const CardCurrency = ({CharCode, Value, Previous}) => {
    let iconName
    let diffValue = (Previous - Value).toFixed(2)
    const diffValueSymbol = diffValue > 0 ? '-' : '+'

    const colorTriangle = diffValue > 0 ? 'red' : 'green'
    const triangleDirection = diffValue > 0 ? 'triangle-down' : 'triangle-up'

    switch (CharCode) {
        case 'USD':
            iconName = 'usd'
            break
        case 'EUR':
            iconName = 'euro'
            break
        case 'CNY':
            iconName = 'cny'
    }

    return (
        <View style={styles.container}>
            <FontAwesome style={styles.symbol} name={iconName}/>
            <Text style={styles.value}>{Value}</Text>
            <Entypo name={triangleDirection} size={26} color={colorTriangle}/>
            <Text style={styles.diff}>{`${diffValueSymbol} ${diffValue}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 20
    },
    symbol: {
        marginRight: 10,
        fontSize: 36,
        color: '#616161'
    },
    value: {
        fontSize: 24,
        color: '#424242',
        marginRight: 10
    },
    diff: {
        fontSize: 22,
        color: '#424242',
    },
})
