import {FlatList, StyleSheet, TouchableOpacity, View} from "react-native";
import {globalStyle} from "../styles/globalStyle";
import {useStore} from "../store";
import {CardNotesPage} from "../components/CardNotesPage";
import {Ionicons} from "@expo/vector-icons";

export const NotesScreen = ({navigation}) => {
    const {notes} = useStore(state => state)

    const handleBtnPress = () => navigation.navigate('NewNote')

    return (
        <View style={globalStyle.container}>
            <FlatList
                keyExtractor={item => item.id}
                data={notes} renderItem={({item}) => <CardNotesPage {...item}/>}
            />
            <TouchableOpacity style={styles.floatBtn} onPress={handleBtnPress}>
                <Ionicons name="add-outline" size={24} color="#616161"/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    floatBtn: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 50,
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 10,
        right: 10
    }
})
