import { getDateIndex } from "./getDate";

function getTemperature(time) {
    let weathers = 0;
    if (time.data && 'hourly' in time.data) {
        weathers = time.data?.hourly
        return weathers.temperature_2m[getDateIndex(weathers.time)]
   }
   
    return weathers;
}

export default getTemperature;