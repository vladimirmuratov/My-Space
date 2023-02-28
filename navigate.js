import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import {MainScreen} from "./screens/Main.Screen";
import {WeatherScreen} from "./screens/Weather.Screen";
import {CurrencyScreen} from "./screens/Currency.Screen";
import {NotesScreen} from "./screens/Notes.Screen";
import {NewNoteScreen} from "./screens/NewNote.Screen";

const Stack = createNativeStackNavigator()

export const Navigate = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main" >
                <Stack.Screen
                    name="Main"
                    component={MainScreen}
                    options={{
                        title: 'Главная',
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#3f51b5'
                        },
                        headerTitleStyle: {
                            fontSize: 24,
                            color: 'white',
                        },
                    }}
                />
                <Stack.Screen
                    name="Weather"
                    component={WeatherScreen}
                    options={{
                        title: 'Погода',
                        headerTitleAlign: 'center',
                        headerTintColor: '#ffffff',
                        headerStyle: {
                            backgroundColor: '#3f51b5'
                        },
                        headerTitleStyle: {
                            fontSize: 24,
                            color: 'white',
                        },
                    }}
                />
                <Stack.Screen
                    name="Currency"
                    component={CurrencyScreen}
                    options={{
                        title: 'Курс валют',
                        headerTitleAlign: 'center',
                        headerTintColor: '#ffffff',
                        headerStyle: {
                            backgroundColor: '#3f51b5'
                        },
                        headerTitleStyle: {
                            fontSize: 24,
                            color: 'white',
                        },
                    }}
                />
                <Stack.Screen
                    name="Notes"
                    component={NotesScreen}
                    options={{
                        title: 'Заметки',
                        headerTitleAlign: 'center',
                        headerTintColor: '#ffffff',
                        headerStyle: {
                            backgroundColor: '#3f51b5'
                        },
                        headerTitleStyle: {
                            fontSize: 24,
                            color: 'white',
                        },
                    }}
                />
                <Stack.Screen
                    name="NewNote"
                    component={NewNoteScreen}
                    options={{
                        title: 'Новая Заметка',
                        headerTitleAlign: 'center',
                        headerTintColor: '#ffffff',
                        headerStyle: {
                            backgroundColor: '#3f51b5'
                        },
                        headerTitleStyle: {
                            fontSize: 24,
                            color: 'white',
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
