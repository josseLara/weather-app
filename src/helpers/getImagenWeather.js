const getTypeImageWeather = (nowTemp)=>{
     // imagen
     let imgTemp = "";
     if (nowTemp > 15) {
          imgTemp = "/weather/sun.png"
     }
     else if(nowTemp > 10){
          imgTemp = "/weather/nublado.png"
     }
     else if(nowTemp > 5){
          imgTemp = "/weather/lluvia.png"
     }
     else if(nowTemp > 1){
          imgTemp = "/weather/nieve.png"

     }
     else{
          imgTemp = "/weather/cero.png"
          
     }
     return imgTemp;
}


export default getTypeImageWeather;