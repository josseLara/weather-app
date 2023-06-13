import { styled } from "styled-components";
import WeatherDescription from "../organisms/WeatherDescription";
import WeatherTemperature from "../organisms/WeatherTemperature";
import WeatherCards from "../organisms/WeatherCards";
import { RiRoadMapLine } from 'react-icons/ri';
import Map from "../organisms/Map";
import { useState } from "react";

function WeatherTemplate() {
     let [btnToggleMap, setBtnToggleMap] = useState(false);

     return (
          <Weather>

               {/* content */}
               <ContentTop>
                    <WeatherDescription />
                    {/* btn map */}
                    <ButtonMap onClick={()=> setBtnToggleMap(!btnToggleMap)}><RiRoadMapLine /></ButtonMap>
                    {/*  */}
                    <WeatherTemperature />
               </ContentTop>

               <WeatherCards />

               {/* modal map */}
               {btnToggleMap &&
                    <ModalMap>
                         <Map />
                    </ModalMap>
               }
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
     gap: 20px;

   
`
const ButtonMap = styled.button`
width: 40px;
height: 40px;
padding: 10px 5px;
font-size: 1.2rem;
border-radius: 100%;
background-color: #2d6596;
border: 1px solid transparent;
color: #fff;
display: flex;
align-items: center;
justify-content: center;
&:hover{
     background-color: transparent;
     border: 1px solid #fff;
     cursor: pointer;
}
`;
const ModalMap = styled.div`
z-index: 10;
width: 300px;
height: 300px;
position: fixed;
top: 9%;
right: 40%;

`
export default WeatherTemplate;