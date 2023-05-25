import { styled } from "styled-components";
import SideBar from "../organisms/SideBar";

function WeatherTemplate() {
     return (  
          <Weather>
               {/* sidebar */}
               <SideBar/>
               {/* content */}
               <main></main>
          </Weather>
     );
}
const Weather = styled.div`
     display: flex;
`;

export default WeatherTemplate;