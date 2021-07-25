import React from 'react';
import Thunder from '../assets/images/Thunderstorm.png'

function Sidebar ({image_url, city, temperature}){
  function getCity(){
    if(city){
      let cityName = city.title
      
      return cityName
    }else{
      return "Serching for your location..." 
    }
  }
  function getTemp(temperature){
    if(temperature){
      const temperatureProm = temperature.map(element => {
        return element.the_temp
      });
      
      let sum = temperatureProm.reduce((previous, current) => current += previous);
      var avg = sum / temperatureProm.length;
      
      return Math.trunc(avg)
    }else{
      return '/'
    }
  }
  function  formatImageUrl(images, placeholder) {
    const BASE_URL = `https://www.metaweather.com/static/img/weather/`

    if(images){
      const imageUrls = images.map(image => {
        return image.weather_state_abbr
      });
      return `${BASE_URL}${imageUrls[5]}.svg`
    }else{
      return placeholder
    }
  }
  
  return(
      <section className="weather">
        <div className="weather--visual">
            <img src={formatImageUrl(image_url,Thunder)} alt="Weather Status Visual" />
        </div>
        <div className="weather--number">
          <p>{getTemp(temperature)}<span>°C</span></p>
        </div>
        <div className="weather--city">
          <h4>{getCity(city)}</h4>
        </div>
      </section>
  )
}

export default Sidebar;