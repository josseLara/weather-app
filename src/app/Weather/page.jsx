'use client'
import './weather.css';
import ForecastWeek from '@/component/content/forecastWeek';
import Lottie from 'react-lottie-player';
import snow from './weather-night-snow-dark.json'
import { SlLocationPin } from 'react-icons/sl'
import { GiSettingsKnobs } from 'react-icons/gi';

function Weather() {

    return (
        <main>
            <span className='date'>Today, 7 May</span>
            <form action="">
                <div className="input__location">
                    <label htmlFor="location">
                        <SlLocationPin />
                    </label>
                    <input type="text" name="location" id="location" placeholder='Tucuman, Argentina' />
                    <GiSettingsKnobs />
                </div>
            </form>
            <span className='location'>Colorado</span>
            <h1>30°</h1>
            <div className="weather-info">

                <Lottie
                    loop
                    animationData={snow}
                    play
                    style={{ width: 250, height: 250 }}
                />
                <div className="info__detailed">
                    <span>Wind</span>
                    <p>324</p>
                    <span>Humidt</span>
                    <p>25%</p>
                </div>
            </div>
            {/* semana clima */}
            <ForecastWeek />
        </main>
    );
}

export default Weather;