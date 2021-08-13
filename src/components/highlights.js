import React from 'react';
import NavigationIcon from '@material-ui/icons/Navigation';
import LoopIcon from "@material-ui/icons/Loop";
import { Container, createStyles, makeStyles } from "@material-ui/core";

function HighLights({consolidated_weather}){
  const useStyles = makeStyles(() =>
    createStyles({
      rotateIcon: {
        animation: "spin 1.5s ease-in-out forwards",
      }
    })
  );
  const classes = useStyles();

  // Get visibility from API consolidated weather
  function getVisibility(weather, dayWanted) {
    if (weather && (dayWanted >= 0) ) {
      let visibility = weather[dayWanted].visibility
      return Number.parseFloat(visibility).toFixed(1);
    }else{
      return '____'
    }
  }

  // Get humidity from API consolidated weather
  function getHumidity(weather, dayWanted) {
    if (weather && (dayWanted >= 0) ) {
      let humidity = weather[dayWanted].humidity
      return Number.parseFloat(humidity)
    }else{
      return '____'
    }
  }

  // Get wind direction string from API consolidated weather
  function getWindDirectionCompas(weatherData) {
    if (weatherData) {
      var windDirection = consolidated_weather[0].wind_direction_compass
      // console.log('Wind direction',windDirection)
      return windDirection
    }else{
      return (
        <>
        <LoopIcon className={classes.rotateIcon} />
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { 
                transform: rotate(${windDirection}deg); 
                animation-fill-mode: forwards; 
              }
            }
          `}
        </style>
        </>
      )
    }
  }

  // Get wind direction degrees from API consolidated weather
  function getWindDirection(weatherData) {
    if (weatherData) {
      var windDirection = consolidated_weather[0].wind_direction.toFixed(0)
      // var windDirection = 180

      console.log('Wind direction',windDirection)
      return (
        <>
          <NavigationIcon className={classes.rotateIcon} />
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { 
                transform: rotate(${windDirection}deg); 
                animation-fill-mode: forwards; 
              }
            }
          `}</style>
          </>
      )
    }else{
      return (
        <Container >
          <NavigationIcon className={classes.rotateIcon} />
          <style>{`
               @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { 
                  transform: rotate(${windDirection}deg); 
                  animation-fill-mode: forwards; 
                }
              }
            `}</style>
        </Container>
      )
    }
  }

  // Get wind speed from API consolidated weather
  function getWindSpeed(weatherData) {
    if (weatherData) {
      var windSpeed = weatherData[0].wind_direction
      return windSpeed.toFixed(0)
    }
  }

  return  (
    <section className="highlights">
      <h2>Today's Highlights</h2>

      <div className="highlights--container">
        <div className="highlights--box highlights--box__big">
          <h5>Wind status</h5>
          <h3>{getWindSpeed(consolidated_weather)}<span>mph</span></h3>
          <div className="wind--direction">
           {getWindDirection(consolidated_weather)}<h5>{getWindDirectionCompas(consolidated_weather)}</h5>
          </div>
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