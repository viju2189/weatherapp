// features/weather/weatherSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { WeatherData } from '../interfaces/weather';
import { WeatherState } from './IWeather';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const initialState: WeatherState = {
    weather: null,
    status: 'idle',
    error: null,
};

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (city: string) => {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        );
        return response.data;
    }
);

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchWeather.fulfilled, (state, action: PayloadAction<WeatherData>) => {
                state.status = 'succeeded';
                state.weather = action.payload;
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export default weatherSlice.reducer;
