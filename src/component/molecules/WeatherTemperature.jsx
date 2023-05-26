import { styled } from "styled-components";
// icons
import {TiWeatherPartlySunny} from 'react-icons/ti';
import TempValue from "../atom/TempValue";

function WeatherTemperature() {
     return (
          <Temperature>
               <Temp>
                    <h1>20°</h1>
                    <span>Showers</span>
                    <TempValue />
               </Temp>
               <TiWeatherPartlySunny />
          </Temperature>
     );
}


// Temperatura
const Temperature = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;

     svg{
          font-size: 9rem;
     }
     `;

const Temp = styled.div`
 
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     gap: 10px;

     h1{
          font-size: 6.9rem;
          font-weight: 300;
          margin-left: 40px;
          padding: 0;
     }
     span{
          font-size: 1.8rem;
     }
`;
export default WeatherTemperature;