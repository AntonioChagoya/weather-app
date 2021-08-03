// Core
import React from 'react';
import Thunder from '../assets/images/Thunderstorm.png'

// Material UI Icons
import LocationOnIcon from '@material-ui/icons/LocationOn';

function SidebarInfo({image_url, city, temperature, date, statusCollection,predicts}){
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

  function getPredictsDays(predicts, wantedDay) {
    const daysText = ['Mon','Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
    const monthsText = ['Jan', 'Feb', 'Mar', 'Apr', 'May ', 'Jun', 'Jul ', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    if (predicts && ( wantedDay >= 0 )) {
      let dayData = predicts[wantedDay] 
      let date = new Date(dayData.applicable_date)

      let monthText = monthsText[date.getMonth()]

      let dayOfTheMonth = date.getDate()
      let dayPosition = date.getDay()
      let dayText = daysText[dayPosition-1]
      

      console.log("" )
      console.log('Real date ', date )
      console.log('Day ', dayOfTheMonth )
      console.log(`DayText: ${dayText}, Day: ${dayOfTheMonth}, Month ${monthText}`)
      
      return `${dayText}, ${dayOfTheMonth} ${monthText}` 
    }else{
      return '---'
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
              Today <span className='weater--separator'>•</span>{getPredictsDays(predicts, 0)}
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