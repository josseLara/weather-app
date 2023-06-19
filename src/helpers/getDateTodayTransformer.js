import { getFormattedDate } from "./getDate"

export function getDateTodayTransformer(time) {
    let date,hour,weatherHour = null
    
    if (time.data && 'hourly' in time.data) {
         let weathers = time.data?.hourly

         date = getFormattedDate()[0]
         hour =getFormattedDate()[1]

         let weatherHours = (weathers?.time).slice(0, 12).map((time, index) => {
              return { time: getFormattedDate(time)[1], temperature_2m: weathers?.temperature_2m[index] }
         })
         weatherHour = weatherHours
    }

    return {date:date,hour:hour,weatherHour:weatherHour}
}