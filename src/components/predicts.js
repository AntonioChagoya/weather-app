import React from 'react';
import Thunder from '../assets/images/Thunderstorm.png'

function Predicts({image_url, weatherState, temperature}){
  const BASE_URL = `https://www.metaweather.com/static/img/weather/`
  
  // function getCity(city){
  //   if(city){
  //     let cityName = city.title
      
  //     return cityName
  //   }else{
  //     return "Serching for your location..." 
  //   }
  // }

  function getTemp(temperature){
    if(temperature){
      const temperatureProm = temperature.map(element => {
        // console.log('Max temp ',element.max_temp)
        // console.log('Min temp', element.min_temp)
        return [element.max_temp,  element.min_temp]
      });
      var merged = [].concat.apply([], temperatureProm);

      var min = Math.min(...merged)
      var max = Math.max(...merged)
      //console.log('Min ', min)
      //console.log('Min ', max)

      return (
        <>
          <span className="predicts--card__max">{Math.trunc(max)}°C </span><span className="predicts--card__min"> {Math.trunc(min)}°C</span>
        </>
      )
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

  // function getDate(dateWithoutFormat) {
  //   if(dateWithoutFormat){
  //     let date = dateWithoutFormat.split('-');
  //     // let year = date[0];
  //     let month = date[1]; 
  //     let dayNoFormat = date[2].split('T');
  //     let day = dayNoFormat[0]

  //     const monthsText = ['January', 'February', 'March', 'April', 'May ', 'June', 'July ', 'August', 'September', 'October', 'November', 'December']
  //     if(month === '07' ){
  //       month = monthsText[6]
  //     }

  //     return `Fri, ${day} ${month}`
  //   }else{
  //     return `----`
  //   }
  // }
  
  return(
      <section className="predicts">
        <div className="predicts--card">
          <h5>Tomorrow</h5>
          <img src={formatImageUrl(image_url, Thunder, BASE_URL)} alt="" />
          <span>16 C</span>
        </div>
        
        <div className="predicts--card">
          <h5>Tomorrow</h5>
          <img src={formatImageUrl(image_url, Thunder, BASE_URL)} alt="" />
          <span className="predict">{getTemp(temperature)}</span>
        </div>
        
        <div className="predicts--card">
          <h5>Tomorrow</h5>
          <img src={formatImageUrl(image_url, Thunder, BASE_URL)} alt="" />
          <span>16 C</span>
        </div>
        
        <div className="predicts--card">
          <h5>Tomorrow</h5>
          <img src={formatImageUrl(image_url, Thunder, BASE_URL)} alt="" />
          <span>16 C</span>
        </div>
        
        <div className="predicts--card">
          <h5>Tomorrow</h5>
          <img src={formatImageUrl(image_url, Thunder, BASE_URL)} alt="" />
          <span>16 C</span>
        </div>
        
      </section>
  )
}

export default Predicts;