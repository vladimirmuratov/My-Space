import {Text, View, StyleSheet, FlatList, Alert, ActivityIndicator} from "react-native";
import {globalStyle} from "../styles/globalStyle";
import {useStore} from "../store";
import {CardCurrencyPage} from "../components/CardCurrencyPage";

export const CurrencyScreen = () => {
    const {currencies, error, loading} = useStore(state => state)
    const {date, values} = currencies

    const getDateLocale = () => {
        return new Date(date).toLocaleDateString("ru-RU")
    }

    return (
        <View style={globalStyle.container}>
            <ActivityIndicator color="#eeeeee" animating={loading} style={globalStyle.loader} size="large"/>
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
                    <CardCurrencyPage {...item}/>
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
