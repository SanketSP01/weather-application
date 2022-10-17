import React, { useState } from 'react'
import '../components/weather.css'
import DisplayData from './DisplayData';

const Weather = () => {

    const apiKey = '4346b48e6d6779eabc0e82cdbd381f5a';
    const [inputVal, setInputVal] = useState({
        city: '',
        country: ''
    })
    const [weather, setWeather] = useState([]);

    async function dataWeather(e) {
        e.preventDefault();
        if (inputVal.city === "") {
            alert("Add City Name");
        }
        if (inputVal.country === "") {
            alert("Add Country Name");
        }
        
        else {
            const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal.city}&${inputVal.country}&appid=${apiKey}`)
                .then(res => res.json())
                .then(data => data)

                setWeather({
                    data: data,
                })
            

            
        }

    }


    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === "city") {
            setInputVal({ ...inputVal, city: value })
        }
        if (name === "country") {
            setInputVal({ ...inputVal, country: value })
        }
    }
   



    return (
        <div className='body'>
            <div className='title'>
                Weather Application
            </div>

            <form>
                <input
                    type='text'
                    name='city'
                    placeholder='City'
                    onChange={(e) => handleChange(e)}
                />

                <input
                    type='text'
                    name='country'
                    placeholder='Country'
                    onChange={(e) => handleChange(e)}
                />
                <button className="btn-2" onClick={(e) => dataWeather(e)}>
                    <span>Submit</span>
                    <i className="fa fa-check" aria-hidden="true">
                    </i>
                </button>

            </form>

            {
                weather.data !== undefined ?
                    <div>
                        <DisplayData data={weather.data} />
                    </div>
                    : null
            }



        </div>
    );
};

export default Weather