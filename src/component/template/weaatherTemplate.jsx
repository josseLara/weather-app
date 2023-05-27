import { styled } from "styled-components";
import SideBar from "../organisms/SideBar";
import MainWeather from "../organisms/MainWeather";
import CardDay from "../molecules/CardDay";
import { useContext } from "react";
import { WeatherContext } from "@/context/context";

function WeatherTemplate() {
     const {cardsDay} = useContext(WeatherContext)

     return (  
          <Weather>
               {/* sidebar */}
               <SideBar/>
               {/* content */}
               <Main>
                    <MainWeather/>
                    <Cards>
                         {cardsDay.map((card,index)=> <CardDay {...card} key={index}/>)}
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
     grid-template-columns: 3fr 1fr;
     height: 100vh;
     background-position: center;
     background-size: cover;
`;

const Cards = styled.div`
     width: 100%;
     display: flex;
     flex-direction: column;
     background-color: #000000a3;
     justify-content: space-between;
`;
export default WeatherTemplate;