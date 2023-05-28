import { styled } from "styled-components";
import WeatherDescription from "../organisms/WeatherDescription";
import WeatherTemperature from "../organisms/WeatherTemperature";

function WeatherTemplate() {

     return (
          <Weather>

               {/* content */}
               <ContentTop>
                    <WeatherDescription />
                    <WeatherTemperature/>
               </ContentTop>
               <Cards>

               </Cards>
          </Weather>
     );
}
const Weather = styled.main`
     width: 100vw;
     height: 100vh;
     background: url(https://img.zcool.cn/community/0109145b86c6f5a80120245c84225b.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100/format,webp);
     background-position: center;
     background-size: cover;
     background-repeat: no-repeat;
`;

const Cards = styled.div`
     width: 100%;
     display: flex;
     flex-direction: column;
     background-color: #000000a3;
     justify-content: space-between;
`;

const ContentTop = styled.div`
     width: 100vw;
     display: flex;
     justify-content: space-between;
     flex-wrap: wrap;
     padding: 15px;
`
export default WeatherTemplate;