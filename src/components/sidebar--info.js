// Core
import React from 'react';
import Thunder from '../assets/images/Thunderstorm.png'

// Material UI Icons
import LocationOnIcon from '@material-ui/icons/LocationOn';

function SidebarInfo({image_url, city, temperature, date, separator, statusCollection}){
  const BASE_URL = `https://www.metaweather.com/static/img/weather/`
  
  function getCity(city){
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

  function  formatImageUrl(images, placeholder, BASE_URL) {
    const URL = BASE_URL

    if(images){
      const imageUrls = images.map(image => {
        return image.weather_state_abbr
      });
      return `${URL}${imageUrls[5]}.svg`
    }else{
      return placeholder
    }
  }

  function getDate(dateWithoutFormat) {
    if(dateWithoutFormat){
      let date = dateWithoutFormat.split('-');
      // let year = date[0];
      let month = date[1]; 
      let dayNoFormat = date[2].split('T');
      let day = dayNoFormat[0]

      const monthsText = ['January', 'February', 'March', 'April', 'May ', 'June', 'July ', 'August', 'September', 'October', 'November', 'December']
      if(month === '07' ){
        month = monthsText[6]
      }

      return `Fri, ${day} ${month}`
    }else{
      return `----`
    }
  }
  
  function getStatus(statusCollection) {
    if(statusCollection){
      const weather_state_name = statusCollection.map(status => {
        return status.weather_state_name
      });
      return  weather_state_name[0]
    }else{
      return `----`
    }
  }
  return(
      <div className="weather">

        <div className="weather--visual">
            <img src={formatImageUrl(image_url,Thunder, BASE_URL)} alt="Weather Status Visual" width="100%"/>
        </div>

        <div className="weather--number">
          <p>
            {getTemp(temperature)}<span>°C</span>
          </p>
        </div>

        <div className="weather--status">
          <h4>
            {getStatus(statusCollection)}
          </h4>
        </div>

        <div>
          <div className="weather--status-date">
            <span>
              Today <span className='weater--separator'>•</span> {getDate(date)}
            </span> 
          </div>

          <div className="weather--current-location">
            <span>
              <LocationOnIcon />{getCity(city)}
            </span>
          </div>
        </div>
      </div>
  )
}


export default SidebarInfo;