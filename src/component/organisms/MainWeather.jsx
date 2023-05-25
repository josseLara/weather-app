import { styled } from "styled-components";

function MainWeather() {
     return (
          <Weather>
               {/*  */}
               <WeatherLocation>
                    <h1>Montreal</h1>
                    <span>Thursday</span>
               </WeatherLocation>
               {/*  */}


          </Weather>
     );
}

// ----> styled <-------
const Weather = styled.div`
     width: 600px;
     display: flex;
     padding: 10px;
     background-color: #00000044;
     color: #fff;
`;
const WeatherLocation = styled.div`
     display: flex;
     flex-direction: column;
     gap: 10px;
     
     h1{
          font-size: 2.9rem;
          font-weight: 400;
     }
     span{
          font-size: 1.5rem;
          font-weight: 200;
     }
`;


export default MainWeather;