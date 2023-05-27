"use client";
// icons
import { TiWeatherPartlySunny, TiWeatherShower, TiWeatherStormy, TiWeatherSunny, TiWeatherWindyCloudy } from "react-icons/ti";

import WeatherTemplate from "../template/weaatherTemplate";
import StatusWeather from "@/context/StatusWeather";
function WeatherPage() {
     // ----> Cards Days <----
     let cardsDay = [
          {
               "day": "Friday",
               "icon": <TiWeatherWindyCloudy />
          }, {
               "day": "Saturday",
               "icon": <TiWeatherPartlySunny />
          },
          {
               "day": "Sunday",
               "icon": <TiWeatherShower />
          },
          {
               "day": "Monday",
               "icon": <TiWeatherStormy />
          },
          {
               "day": "Tuesday",
               "icon": <TiWeatherSunny />
          }
     ]
     // ---->  Cards Time <----
     let cardsTime = [
          {
               "time": "1PM",
               "icon": <TiWeatherWindyCloudy />
          }, {
               "time": "2PM",
               "icon": <TiWeatherPartlySunny />
          },
          {
               "time": "3PM",
               "icon": <TiWeatherShower />
          },
          {
               "time": "4PM",
               "icon": <TiWeatherStormy />
          },
          {
               "time": "5PM",
               "icon": <TiWeatherSunny />
          }
     ]
     return (
          <StatusWeather status={{cardsDay,cardsTime}}>
               <WeatherTemplate  />
          </StatusWeather>
     );
}

export default WeatherPage;