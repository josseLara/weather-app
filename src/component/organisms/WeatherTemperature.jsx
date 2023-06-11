import { styled } from "styled-components";
import Cast from "../molecules/Cast";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDateIndex, matchingDateIndex } from "@/helpers/getDate";
import getTypeImageWeather from "@/helpers/getImagenWeather";

const WeatherTemperature = () => {
     let time = useSelector(state => state.weather)
     const [nowTemp, setNowTemp] = useState();
     useEffect(() => {
          if (time.data && 'hourly' in time.data) {
               let weathers = time.data?.hourly

               console.log(weathers.temperature_2m[getDateIndex(weathers.time)])
               setNowTemp(weathers.temperature_2m[getDateIndex(weathers.time)])
          }

     }, [time])

     // imagen
     let imgTemp = getTypeImageWeather(nowTemp);

     return (
          <Temperature>
               <h1>Clear City</h1>
               <p>Berlin, Germany</p>
               <img src={imgTemp} alt="temperature" />

               {/* temperatura */}
               <Forecast>
                    {/* 1 */}
                    <Cast temp={nowTemp} />

               </Forecast>
          </Temperature>
     );
};

const Temperature = styled.div`
     width: 280px;
     display: flex;
     flex-direction: column;
     align-items: center;
     gap: 10px;
     border-radius: 16px;
     color: #fff;
     background: #5682d7;
     padding: 10px 20px;
     img{
          width: 150px;
          height: 150px;
          object-fit: cover;
     }
     h1{
          font-size: 2rem;
          font-weight: 600;
     }
     p{
          font-size: 1.1rem;
          font-weight: 300;
          color: #ffffff82;
     }

     @media screen and (min-width:900px){
          width: 350px;
          h1{
                    font-size: 2.3rem;      
          }
     }
`;

const Forecast = styled.div`
     display:flex;
     align-items: center;
     gap: 30px;
     margin-top: 20px;
`;

export default WeatherTemperature;