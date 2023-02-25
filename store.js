import {create} from 'zustand';
import {WEATHER_API_KEY} from "./config";

export const useStore = create((set, get) => ({
    weather: {},
    currencies: {
        values: []
    },
    error: null,
    loading: false,
    fetchWeather: async (lat, lon) => {
        set({
            error: null,
            loading: true
        })
        const url_get_city_name = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
        const url_get_current_weather = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=${WEATHER_API_KEY}`
        try {
            const response = await fetch(url_get_city_name)
            const data = await response.json()
            const city = data[0]['local_names']['ru']
            if (city) {
                const res = await fetch(url_get_current_weather(city))
                const data = await res.json()
                set({
                    weather: {
                        city,
                        temp: data.main.temp,
                        description: data.weather[0].description,
                        icon: data.weather[0].icon,
                    }
                })
            }
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
                }
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
    }
}))
