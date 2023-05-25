import Lottie from 'react-lottie-player';
import './itemWeather.css';
import snow from '../../../app/Weather/weather-night-snow-dark.json'

function ItemWeather() {
    return ( 
        <div className='itemWeather'>
            <span>Sab.</span>
            <Lottie
            
                    loop
                    animationData={snow}
                    play
                   
                    className='anim'
                />
            <p>20°</p>
        </div>
     );
}

export default ItemWeather;