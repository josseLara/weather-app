import { styled } from "styled-components";
import SideBar from "../organisms/SideBar";
import MainWeather from "../organisms/MainWeather";
import CardDay from "../molecules/CardDay";

function WeatherTemplate() {
     return (  
          <Weather>
               {/* sidebar */}
               <SideBar/>
               {/* content */}
               <Main>
                    <MainWeather/>
                    <Cards>
                         <CardDay/>
                         <CardDay/>
                         <CardDay/>
                    </Cards>
               </Main>
          </Weather>
     );
}
const Weather = styled.div`
     display: flex;
`;
const Main = styled.main`
     display: grid;
     background-image: url(https://i.imgur.com/bkHpV7t.jpeg);
     width: 100%;
     grid-template-columns: 2fr 1fr;
     height: 100vh;
     background-position: center;
     background-size: cover;
`;

const Cards = styled.div`
     width: 100%;
     display: flex;
     flex-direction: column;
     background-color: #000000a3;
`;
export default WeatherTemplate;