import { styled } from "styled-components";
import WeatherLocation from "../molecules/WeatherLocation";
import WeatherTemperature from "../molecules/WeatherTemperature";
import CardTime from "../molecules/CardTime";

function MainWeather() {
     return (
          <Weather>
               {/*  */}
               <WeatherLocation />
               {/*  */}
               <WeatherTemperature />

               <Cards>
                    <CardTime/>
                    <CardTime/>
                    <CardTime/>
                    <CardTime/>
                    <CardTime/>
               </Cards>
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

// Cards
const Cards = styled.div`
     width: 100%;
     display: flex;
     justify-content: space-around;
     border-top: 1px solid #ffffff56;
     padding-top: 20px;
`
export default MainWeather;