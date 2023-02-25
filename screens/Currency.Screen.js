import {Text, View, StyleSheet, FlatList, Alert} from "react-native";
import {globalStyle} from "../styles/globalStyle";
import {useStore} from "../store";
import {CardCurrency} from "../components/CardCurrency";

export const CurrencyScreen = () => {
    const {currencies, error} = useStore(state => state)
    const {date, values} = currencies

    const getDateLocale = () => {
        return new Date(date).toLocaleDateString()
    }

    return (
        <View style={globalStyle.container}>
            {error
                ? Alert.alert(error, 'Try again later', [
                    {text: 'OK'}
                ])
                : null
            }
            <Text style={styles.date}>{getDateLocale()}</Text>
            <FlatList
                data={values}
                keyExtractor={item => item['ID']}
                renderItem={({item}) => (
                    <CardCurrency {...item}/>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    date: {
        marginVertical: 10,
        textAlign: 'center',
        fontSize: 26,
        color: '#e0e0e0'
    }
})