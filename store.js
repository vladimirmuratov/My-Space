import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {WEATHER_API_KEY} from "./config";

const NOTES_KEY = '@notes_key'

export const useStore = create((set, get) => ({
    weather: {},
    currencies: {},
    notes: [],
    cats: [],
    dogs: [],
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
            const json = await resWeather.json()
            set({
                weather: {
                    city,
                    daily: json.daily
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
            const json = await response.json()
            const date = json.Timestamp
            const usd = json['Valute']['USD']
            const eur = json['Valute']['EUR']
            const cny = json['Valute']['CNY']
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
        set({
            error: null,
            loading: true
        })
        try {
            const notes = await AsyncStorage.getItem(NOTES_KEY)
            if (notes) {
                set({
                    notes: JSON.parse(notes)
                })
            }
            set({
                loading: false
            })
        } catch (e) {
            set({
                error: e.message,
                loading: false
            })
        } finally {
            set({
                loading: false
            })
        }
    },
    fetchCats: async () => {
        set({
            error: null,
            loading: true
        })
        try {
            const res = await fetch('https://api.thecatapi.com/v1/images/search')
            const json = await res.json()

            set({
                cats: json,
                loading: false
            })
        } catch (e) {
            set({
                error: e.message,
                loading: false
            })
        } finally {
            set({
                loading: false
            })
        }
    },
    fetchDogs: async () => {
        set({
            error: null,
            loading: true
        })
        try {
            const res = await fetch('https://api.thedogapi.com/v1/images/search')
            const json = await res.json()
            set({
                dogs: json,
                loading: false
            })
        } catch (e) {
            set({
                error: e.message,
                loading: false
            })
        } finally {
            set({
                loading: false
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
