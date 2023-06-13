import { getFormattedDate } from "@/helpers/getDate";
import getDateMonth from "@/helpers/getDateMonth";
import getTypeImageWeather from "@/helpers/getImagenWeather";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";

const WeatherCards = ( e ) => {
     const [weatherMonths,setWeatherMonts] = useState();

     let time = useSelector(state => state.weather)
     useEffect(()=>{
          if (time.data && 'hourly' in time.data) {
              let weathers = time.data?.hourly;
              let months =  getDateMonth(weathers.time).map((date)=>{
               let timeFormat = getFormattedDate(date.time)[0].split(',')[0];
                    return {month:timeFormat,temperature_2m:weathers?.temperature_2m[date.index]}
              });
              setWeatherMonts(months);
              
          }
     },[time])
   


     return (
          <Cards>
               {weatherMonths && weatherMonths.map( (time,i) => {
                    return <Card key={i}>
                         <span className="day">{time.month}</span>
                         <div className="cardTemperature">
                              <img src={getTypeImageWeather(time.temperature_2m)} alt="temperature" />
                              <span className="temperature">{time.temperature_2m}°</span>
                         </div>
                    </Card>
               } )
               }
          </Cards>
     );
};

const Cards = styled.div`
     width: 100%;
     height: 200px;
     display: flex;
     overflow-x: auto;
     overflow-y: hidden;
     padding-left: 10px;
     gap: 20px;
     
`;

const Card = styled.div`
     width: 200px;
     height: 160px;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content:center ;
     color: #fff;
     border-radius: 10px;
     background-color: #e0eafd;
     
     img{
          width: 100px;
          height: 100px;
          object-fit: cover;
     }

     .day{
          width: 102%;
          font-size: 1.5rem;
          font-weight: 300;
          background-color: #5682d7;
          margin-top: 17px;
          text-align: center;
          border-radius: 3px;
     }
     .cardTemperature{
          width: 100%;
          height: 190px;
          display: flex;
          align-items: center;
          padding: 20px;
     }
     .temperature{
          font-size: 1.7rem;
          font-weight: 600;
          color: #1c4494;
     }
`;
export default WeatherCards;