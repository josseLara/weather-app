import { styled } from "styled-components";
import SideBar from "../organisms/SideBar";
import MainWeather from "../organisms/MainWeather";

function WeatherTemplate() {
     return (  
          <Weather>
               {/* sidebar */}
               <SideBar/>
               {/* content */}
               <Main>
                    <MainWeather/>
               </Main>
          </Weather>
     );
}
const Weather = styled.div`
     display: flex;
`;
const Main = styled.main`
     display: flex;
     background-image: url(https://i.imgur.com/qtWpvMX.jpeg);
     width: 100%;
     height: 100vh;
     background-position: center;
     background-size: cover;
`;
export default WeatherTemplate;