import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {WEATHER_API_KEY} from "./config";

const NOTES_KEY = '@notes_key'

export const useStore = create((set, get) => ({
    weather: {},
    currencies: {},
    notes: [],
    error: null,
    loading: false,
    fetchWeather: async (lat, lon) => {
        set({
            error: null,
            loading: true
        })
        const url_get_city_name = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
        const url_get_weather = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&lang=ru`
        try {
            const resCity = await fetch(url_get_city_name)
            const dataCity = await resCity.json()
            const city = dataCity[0]['local_names']['ru']
            const resWeather = await fetch(url_get_weather)
            const dataWeather = await resWeather.json()
            set({
                weather: {
                    city,
                    daily: dataWeather.daily
                },
                loading: false
            })
        } catch (_) {
            set({
                error: '500 Internal Server Error',
                loading: false
            })
        } finally {
            set({
                loading: false
            })
        }
    },
    fetchCurrency: async () => {
        set({
            error: null,
            loading: true
        })

        const url_currency = 'https://www.cbr-xml-daily.ru/daily_json.js'
        try {
            const response = await fetch(url_currency)
            const data = await response.json()
            const date = data.Timestamp
            const usd = data['Valute']['USD']
            const eur = data['Valute']['EUR']
            const cny = data['Valute']['CNY']
            set({
                currencies: {
                    date,
                    values: [usd, eur, cny]
                },
                loading: false
            })
        } catch (_) {
            set({
                error: '500 Internal Server Error',
                loading: false
            })
        } finally {
            set({
                loading: false
            })
        }
    },
    fetchNotes: async () => {
        try {
            const notes = await AsyncStorage.getItem(NOTES_KEY)
            if (notes) {
                set({
                    notes: JSON.parse(notes)
                })
            }
        } catch (e) {
            set({
                error: e.message
            })
        }
    },
    createNote: async (payload) => {
        let notes = get().notes
        set({
            notes: [
                payload,
                ...notes
            ]
        })
        notes = [
            payload,
            ...notes
        ]
        try {
            await AsyncStorage.setItem(NOTES_KEY, JSON.stringify(notes))
        } catch (e) {
            set({
                error: e.message
            })
        }
    },
    deleteNote: async (id) => {
        let notes = get().notes
        notes = notes.filter(item => item.id !== id)
        set({
            notes
        })
        await AsyncStorage.setItem(NOTES_KEY, JSON.stringify(notes))
    }
}))
