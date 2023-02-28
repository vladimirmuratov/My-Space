import {TextInput, View, StyleSheet, TouchableOpacity, Text} from "react-native";
import {globalStyle} from "../styles/globalStyle";
import {useState} from "react";
import {useStore} from "../store";

export const NewNoteScreen = ({navigation}) => {
    const randomId = Math.round(Math.random() * 1000)
    const {createNote} = useStore(state => state)
    const [text, setText] = useState('')

    const handleSubmit = async () => {
        if (text.length) {
            const payload = {
                id: randomId,
                date: Date.now(),
                text: text.trim(),
            }
            await createNote(payload)
            setText('')
            navigation.navigate('Notes')
        }
    }

    return (
        <View style={globalStyle.container}>
            <TextInput
                autoFocus={true}
                multiline={true}
                numberOfLines={4}
                style={[globalStyle.bgPageItem, styles.input]}
                value={text}
                onChangeText={setText}
            />
            <TouchableOpacity style={[styles.btn, {opacity: text.length ? 1 : 0.5}]} onPress={handleSubmit}>
                <Text style={styles.label}>CREATE</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        fontSize: 18,
        letterSpacing: 1,
        lineHeight: 20,
        color: '#424242',
        marginBottom: 10
    },
    btn: {
        backgroundColor: '#1a237e',
        paddingVertical: 15
    },
    label: {
        color: '#eeeeee',
        textAlign: 'center',
        letterSpacing: 1
    }
})
