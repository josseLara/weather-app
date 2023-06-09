"use client";
import MeshCity from "../molecules/City/Mesh";
import WeatherTemplate from "../template/weaatherTemplate";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAddData } from "@/reducer/weather/weather";
import fetchWeatherData from "@/app/api/weatherApi";
import Map from "../organisms/Map";

function WeatherPage() {
    let dispatch= useDispatch();
    
    useEffect(()=>{     
        fetchWeatherData().then( data=>{
           dispatch(onAddData(data))
        })
    },[])

     return (
         <>
          <WeatherTemplate  />
          <MeshCity/>
         </>

     );
}


export default WeatherPage;