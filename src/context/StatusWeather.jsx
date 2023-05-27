import { WeatherContext } from "./context";

function StatusWeather({children,status}) {
     return ( 
          <WeatherContext.Provider value={{...status}}>
               {children}
          </WeatherContext.Provider>
      );
}

export default StatusWeather;