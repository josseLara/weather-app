import { styled } from "styled-components";
import WeatherDescription from "../organisms/WeatherDescription";
import WeatherTemperature from "../organisms/WeatherTemperature";
import WeatherCards from "../organisms/WeatherCards";

function WeatherTemplate() {

     return (
          <Weather>

               {/* content */}
               <ContentTop>
                    <WeatherDescription />
                    <WeatherTemperature />
               </ContentTop>

               <WeatherCards />

          </Weather>
     );
}
const Weather = styled.main`
     width: 100vw;
     height: 100vh;
     background-color: transparent;
     background-position: center;
     background-size: cover;
     background-repeat: no-repeat;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     position: fixed;
     z-index: 10;
`;

const ContentTop = styled.div`
     width: 100vw;
     display: flex;
     justify-content: space-between;
     flex-wrap: wrap;
     padding: 15px;
`
export default WeatherTemplate;