import React from 'react';
import { FaCloudSun } from "react-icons/fa";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";


const Temp = () => {
    return (
        <div className="w-full">
            <div className='flex justify-between'>
                <div>
                    <FaCloudSun />
                </div>
                <h1>20°</h1>
                <div className="div">
                    <div className='flex'>
                        <FaTemperatureThreeQuarters />
                        <p>Real Feel: 14°</p>
                    </div>
                    <div className='flex'>
                        <WiHumidity />
                        <p>Humidity: 92%</p>
                    </div>
                    <div className='flex'>
                        <FaWind />
                        <p>wind: 5km/h</p>
                    </div>
                </div>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    )
}

export default Temp
