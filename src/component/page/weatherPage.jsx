"use client";
import fetchWeather from "@/app/api/weatherApi";
import MeshCity from "../molecules/City/Mesh";
import WeatherTemplate from "../template/weaatherTemplate";

function WeatherPage({ApiData}) {
    const weatherData = ApiData;
    
     return (
         <>
          <WeatherTemplate  />
          <MeshCity/>
         </>

     );
}


export default WeatherPage;