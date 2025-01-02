import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { fetchWeather } from '../store/weatherSlice';
import { IoSearchSharp } from "react-icons/io5";
import { BiCurrentLocation } from "react-icons/bi";
import TimeLocation from './Time&Location';
import Temp from './Temp';


const Weather = () => {
    const [city, setCity] = useState<string>('');
    const dispatch = useDispatch<AppDispatch>();

    // Access Redux state
    const weatherdata = useSelector((state: RootState) => state.weather.weather);
    const status = useSelector((state: RootState) => state.weather.status);
    const error = useSelector((state: RootState) => state.weather.error);

    React.useEffect(() => {
        console.log("Weather data updated:", weatherdata);
    }, [weatherdata]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
    };

    const onClick = () => {
        if (city) {
            dispatch(fetchWeather(city));
        }
        console.log(JSON.stringify(weatherdata));
    };

    return (
        <div className='w-[1000px] bg-[#8de8e8] rounded-lg h-96 shadow-2xl flex flex-col items-center'>
            <div className='m-auto w-[700px]'>
                <div className='flex items-center justify-center mt-6'>
                    <input
                        type="text"
                        placeholder='Enter city name'
                        value={city}
                        onChange={handleChange}
                        className='w-full px-2 capitalize focus:outline-none'
                    />
                    <button onClick={onClick} className='px-2 py-1 bg-white '>
                        <IoSearchSharp className='transition-transform ease-out transform hover:scale-125' />
                    </button>
                    <button className='pl-4'>
                        <BiCurrentLocation className='text-xl transition-transform ease-out transform hover:scale-125' />
                    </button>
                    <button className='pl-16 text-2xl font-medium transition-transform ease-out transform hover:scale-125'>
                        °C
                    </button>
                    <p className='mx-1 text-2xl font-medium'>|</p>
                    <button className='text-2xl font-medium transition-transform ease-out transform hover:scale-125'>
                        °F
                    </button>
                </div>
                <TimeLocation />

                {/* Show loading, error, or weather data based on the state */}
                {status === 'loading' && <p className='mt-4 text-center'>Loading...</p>}
                {error && <p className='mt-4 text-center text-red-500'>{error}</p>}
                {weatherdata && (
                    <div className='mt-4 text-center'>
                        <h1 className='pt-6 text-4xl font-bold'>{weatherdata.name}</h1>
                        <div className='flex gap-8'>
                            <p className='pt-6 text-2xl'>Temp is: {weatherdata.main.temp}°C</p>
                            <p className='pt-6 text-2xl'>Desc: {weatherdata.weather[0].description}</p>
                        </div>
                    </div>
                )}

                <Temp />
            </div>
        </div>
    );
};

export default Weather;
