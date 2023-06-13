   async function fetchWeatherData(lat=52.52,lgn=13.41){
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lgn}&hourly=temperature_2m`);
    const data = await response.json();
    return data;
  }
  
  export default fetchWeatherData;