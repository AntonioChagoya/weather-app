import React from 'react';
import Thunder from '../assets/images/Thunderstorm.png'

function Predicts({image_url, temperature, date, predicts}){
  const BASE_URL = `https://www.metaweather.com/static/img/weather/`
  
  console.log('Response data: ', temperature)

  function getTemp(temperature, dayWanted){
    if(temperature && dayWanted){
      var min = temperature[dayWanted].min_temp
      var max = temperature[dayWanted].max_temp
      return (
        <>
          <span className="predicts--card__max">{Math.trunc(max)}°C </span><span className="predicts--card__min"> {Math.trunc(min)}°C</span>
        </>
      )
    }else{
      return ''
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
  return(
      
      <section className="predicts"> 
        {/* Predictions */}
        <div className="predicts--card">
          <h5>Tomorrow</h5>
          <img src={formatImageUrl(image_url, Thunder, BASE_URL)} alt="" />
          <span className="predict">{getTemp(temperature, 1)}</span>

        </div>
        
        <div className="predicts--card">
          <h5>{getPredictsDays(predicts, 2)}</h5>
          <img src={formatImageUrl(image_url, Thunder, BASE_URL)} alt="" />
          <span className="predict">{getTemp(temperature, 2)}</span>
        </div>
        
        <div className="predicts--card">
          <h5>{getPredictsDays(predicts, 3)}</h5>
          <img src={formatImageUrl(image_url, Thunder, BASE_URL)} alt="" />
          <span className="predict">{getTemp(temperature, 3)}</span>

        </div>
        
        <div className="predicts--card">
          <h5>{getPredictsDays(predicts, 4)}</h5>
          <img src={formatImageUrl(image_url, Thunder, BASE_URL)} alt="" />
          <span className="predict">{getTemp(temperature, 4)}</span>
        </div>
        
        <div className="predicts--card">
          <h5>{getPredictsDays(predicts, 5)}</h5>
          <img src={formatImageUrl(image_url, Thunder, BASE_URL)} alt="" />
          <span className="predict">{getTemp(temperature, 5)}</span>
        </div>
        
      </section>
  )
}

export default Predicts;