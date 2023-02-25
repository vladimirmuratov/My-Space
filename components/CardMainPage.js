import {StyleSheet, TouchableOpacity} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {globalStyle} from "../styles/globalStyle";

export const CardMainPage = ({nameIcon, namePage, navigation}) => {
    const handlePress = () => {
        navigation.navigate(namePage)
    }

    return (
        <TouchableOpacity style={[globalStyle.bgPageItem, styles.container]} onPress={handlePress}>
            <MaterialCommunityIcons name={nameIcon} size={64} color="#616161"/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 150,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#757575',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    }
})
