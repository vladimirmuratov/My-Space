import {Alert, StyleSheet, Text, TouchableOpacity} from "react-native";
import {globalStyle} from "../styles/globalStyle";
import {useStore} from "../store";

export const CardNotesPage = ({id, text, date}) => {
    const {deleteNote} = useStore(state => state)
    const d = new Date(date).toLocaleDateString(['ru-RU'])
    const t = new Date(date).toLocaleTimeString(['ru-RU'])
        .replace(/\u200E/g, '') // убираем секунды
        .replace(/^([^\d]*\d{1,2}:\d{1,2}):\d{1,2}([^\d]*)$/, '$1$2')

    const handlePress = (id) => {
        Alert.alert(
            'Внимание',
            'Удалить заметку?',
            [
                {
                    text: 'Нет',
                    onPress: () => {
                    },
                    style: 'cancel',
                },
                {
                    text: 'Да',
                    onPress: () => deleteNote(id)
                }
            ])
    }


    return (
        <TouchableOpacity style={[globalStyle.bgPageItem, styles.wrapper]} onPress={() => handlePress(id)}>
            <Text>{`${d}, ${t}`}</Text>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
        marginBottom: 10
    },
    text: {
        fontSize: 20
    }
})
