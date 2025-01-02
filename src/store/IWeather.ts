import { WeatherData } from "../interfaces/weather";

export interface WeatherState {
    weather: WeatherData | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}