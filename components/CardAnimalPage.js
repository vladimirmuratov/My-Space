import {globalStyle} from "../styles/globalStyle";
import {ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

export const CardAnimalPage = ({url, loading, onPress: handlePress}) => {
    return(
        <View style={[globalStyle.container]}>
            <ActivityIndicator style={styles.loader} animating={loading} size="large" color="white"/>
            <Image source={{uri: url}} style={styles.image}/>
            <TouchableOpacity style={styles.btn} onPress={handlePress}>
                <Text style={styles.label}>Ещё</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: '100%',
        width: '100%'
    },
    btn: {
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
        backgroundColor: 'white',
        opacity: 0.7,
        borderRadius: 50,
        paddingHorizontal: 30,
        paddingVertical: 10,
        zIndex: 2
    },
    label: {
        fontSize: 24,
        letterSpacing: 1
    },
    loader: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 1
    }
})
