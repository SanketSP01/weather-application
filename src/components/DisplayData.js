import React, { useState, useEffect } from 'react';
import './displayweather.css';

const DisplayData = ({ data }) => {
    const [isCelsius, setIsCelsius] = useState(true);
    const [weatherIcon, setWeatherIcon] = useState('');
    const [temperature, setTemperature] = useState(0);

    useEffect(() => {
        if (data) {
            const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            setWeatherIcon(icon);

            if (isCelsius) {
                setTemperature(Math.floor(data.main.temp - 273.15));
            } else {
                setTemperature(Math.floor((data.main.temp - 273.15) * 9 / 5 + 32));
            }
        }
    }, [data, isCelsius]);

    const toggleTemperatureUnit = () => {
        setIsCelsius(!isCelsius);
    };

    return (
        <div className='widget'>
            <div className="left-panel panel">
                <div className="date">
                    {new Date().toLocaleDateString()}
                </div>
                <div className="city">
                    {data.name}, {data.sys.country}
                </div>
                <div className="temp">
                    <img src={weatherIcon} alt="" width="60" />
                    {temperature}&deg;{isCelsius ? 'C' : 'F'}
                </div>
                <div className="unit-toggle">
                    <label>
                        Celsius
                        <input
                            type="radio"
                            value="celsius"
                            checked={isCelsius}
                            onChange={toggleTemperatureUnit}
                        />
                    </label>
                    <label>
                        Fahrenheit
                        <input
                            type="radio"
                            value="fahrenheit"
                            checked={!isCelsius}
                            onChange={toggleTemperatureUnit}
                        />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default DisplayData;
