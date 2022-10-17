import React from 'react'
import './displayweather.css'

const DisplayData = ({data}) => {
    console.log(data)
    
    const weatherIcon =`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
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
                   <img src={weatherIcon} alt="" width="60"/>
                   {Math.floor(data.main.temp - 273.15)}&deg;
                </div>
               
            </div>

        </div>
     )
}

export default DisplayData;