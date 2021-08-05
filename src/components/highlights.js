import React from 'react';
import NavigationIcon from '@material-ui/icons/Navigation';


function HighLights({consolidated_weather}){

  function getVisibility(weather, dayWanted) {

    if (weather && (dayWanted >= 0) ) {
      let visibility = weather[dayWanted].visibility
      return Number.parseFloat(visibility).toFixed(1);
    }else{
      return '____'
    }

  }
  function getHumidity(weather, dayWanted) {

    if (weather && (dayWanted >= 0) ) {
      let humidity = weather[dayWanted].humidity
      return Number.parseFloat(humidity)
    }else{
      return '____'
    }

  }






  return  (
    <section className="highlights">
      <h2>Today's Highlights</h2>

      <div className="highlights--container">
        <div className="highlights--box highlights--box__big">
          <h5>Wind status</h5>
          <h3>7<span>mph</span></h3>
          <NavigationIcon /><h5>WSW</h5>
        </div>
        <div className=" highlights--box highlights--box__big">
          <h5>Humidity</h5>
          <h3>{getHumidity(consolidated_weather, 0)}<span>%</span></h3>
          <h5>Bar</h5>
        </div>
        <div className="highlights--box highlights--box__small">
          <h5>Visibility</h5>
          <h3>{getVisibility(consolidated_weather, 0)} <span>miles</span> </h3>
        </div>
        <div className="highlights--box highlights--box__small">
          <h5>Air Pressure</h5>
          <h3>998<span>mb</span></h3>
        </div>
        
      </div>
    </section>
  )
}

export default HighLights;