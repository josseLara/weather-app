import ItemWeather from '@/component/ItemWeather';
import './weather.css';
import { BsFillCalendar3WeekFill } from 'react-icons/bs';

function Weather() {
    return (
        <main>
            <span className='location'>Colorado</span>
            <h1>30°</h1>
            <img src="https://i.pinimg.com/originals/83/c8/9a/83c89a40ae221e05fa675cc73d487cad.gif" alt="weather" className="weather-img" />
            {/* semana clima */}
            <div className='forecast'>
                <BsFillCalendar3WeekFill />
                <span>Forecast</span>
            </div>
            <div className='list-forecast'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#37455F" fill-opacity="1" d="M0,288L48,240C96,192,192,96,288,90.7C384,85,480,171,576,176C672,181,768,107,864,74.7C960,43,1056,53,1152,48C1248,43,1344,21,1392,10.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                <ItemWeather />
            </div>
        </main>
    );
}

export default Weather;