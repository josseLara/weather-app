import { styled } from "styled-components";
import WeatherLocation from "../molecules/WeatherLocation";
import WeatherTemperature from "../molecules/WeatherTemperature";

function MainWeather() {
     return (
          <Weather>
               {/*  */}
               <WeatherLocation />
               {/*  */}
               <WeatherTemperature />

          </Weather>
     );
}

// ----> styled <-------
const Weather = styled.div`
     width: 600px;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: space-between;
     padding: 10px;
     background-color: #00000044;
     color: #fff;
`;



export default MainWeather;