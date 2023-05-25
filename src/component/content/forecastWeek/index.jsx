import './forecastWeek.css';
import { BsFillCalendar3WeekFill } from 'react-icons/bs';
import ItemWeather from '@/component/pure/ItemWeather';

function ForecastWeek({ children }) {
    return (
        <div className='forecastWeek'>
            <div className='forecastWeek__forecast'>
                <BsFillCalendar3WeekFill />
                <span>Forecast</span>
            </div>
            <svg viewBox="0 0 840 200" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <path fill="#586d8a" d="M 0 0 C 1 0 -3 102 -2 102 L -2 102 L -2 0 L 0 0 Z" strokeWidth="0"></path>
                <path fill="#586d8a" d="M -3 102 C 130.5 102 130.5 4 264 4 L 264 4 L 264 0 L -3 0 Z" strokeWidth="0"></path>
                <path fill="#586d8a" d="M 263 4 C 528.5 4 528.5 30 794 30 L 794 30 L 794 0 L 263 0 Z" strokeWidth="0"></path>
                <path fill="rgba(58, 76,126,1)" d="M79330C816.530816.5008400L840084000L7930Z" strokeWidth="0"></path>
            </svg>
            <div className='list-forecast'>

                <ItemWeather />
                <ItemWeather />
                <ItemWeather />
                <ItemWeather />
                <ItemWeather />
                <ItemWeather />
                <ItemWeather />
            </div>
        </div>
    );
}

export default ForecastWeek;