import './weather.css';
import ForecastWeek from '@/component/content/forecastWeek';
import Lottie from 'react-lottie-player';
import snow from '/weather-night-snow-dark.json'

function Weather() {
    return (
        <main>
            <span className='location'>Colorado</span>
            <h1>30°</h1>
            <Lottie
                loop
                animationData={snow}
                play
                style={{ width: 150, height: 150 }}
            />
            {/* semana clima */}
            <ForecastWeek />
        </main>
    );
}

export default Weather;