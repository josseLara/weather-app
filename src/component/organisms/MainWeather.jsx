import { styled } from "styled-components";

function MainWeather() {
     return (
          <div>
               <WeatherLocation>
                    <h1>Montreal</h1>
                    <span>Thursday</span>
               </WeatherLocation>

               

          </div>
     );
}

// ----> styled <-------
const WeatherLocation = styled.div`
     display: flex;
     flex-direction: column;
     gap: 10px;
`


export default MainWeather;