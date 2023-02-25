import {FlatList, StyleSheet, View} from "react-native";
import {globalStyle} from "../styles/globalStyle";
import {cardOptions} from "../config";
import {CardMainPage} from "../components/CardMainPage";

export const MainScreen = ({navigation}) => {
    return (
        <View style={[globalStyle.container, styles.wrapper]}>
            <FlatList
                data={cardOptions}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <CardMainPage
                        nameIcon={item.nameIcon}
                        namePage={item.namePage}
                        navigation={navigation}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 10,
        paddingHorizontal: 10
    }
})
