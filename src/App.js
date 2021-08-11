// React Core
import React, {useState, useEffect} from 'react';
import './App.css';

// Components
import SidebarInfo from './components/sidebar--info';
import SidebarSearch from './components/sidebar--search';
import Predicts from './components/predicts';
import ConverUnits from './components/convertUnits';
import HighLights from './components/highlights'

// Material UI
import MyLocationIcon from '@material-ui/icons/MyLocation';

function App() {
  // Constant url for weather app 
  const BASE_API_URL = 'https://www.metaweather.com'
  // Location information, and a 5 day forecast. This API requieres a woeid number at the end - /api/location/woeid/
  const LOCATION_API = '/api/location/' 
  // Position API /api/location/search/?lattlong=(latt),(long)
  const POSITION_API = '/api/location/search/?lattlong='

  // Weather state
  const [weatherState, setWeatherState] = useState([]);
  console.log('Weather State', weatherState)

  useEffect(() => {
      const getWeatherState = async () => {
        const getLocation = () => new Promise(
          (resolve, reject) => {
            window.navigator.geolocation.getCurrentPosition(
              position => {
                const location = {
                  lat:position.coords.latitude,
                  long:position.coords.longitude
                };
                resolve(location); 
              },
              err => reject(err) 
            );
          }
        );

        try{
          // Location Promise resolved
          const coordinatesResponse = await getLocation()
          let lattFormated = coordinatesResponse['lat'].toFixed(2)
          let longFormated = coordinatesResponse['long'].toFixed(2)
          
          // Position API query
          const positionFormatedURL = `${BASE_API_URL}${POSITION_API}${lattFormated},${longFormated}`
          const positionResponse= await fetch(positionFormatedURL)
          const positionData = await positionResponse.json()
          let woeid = await positionData[0].woeid || 116545;
          // console.log('Position data ', woeid)

          // Location API query
          const locationFormatedURL = `${BASE_API_URL}${LOCATION_API}${woeid}/`
          const locationResponse = await fetch(locationFormatedURL)
          const locationData = await locationResponse.json();
          // console.log('Location data ', positionData)

          // console.log('Response data: ', locationData)
          setWeatherState(locationData)
        }catch(err){
           // Location API query
           const locationFormatedURL = `${BASE_API_URL}${LOCATION_API}116545/`
           const locationResponse = await fetch(locationFormatedURL)
           const locationData = await locationResponse.json();

          setWeatherState(locationData)
        }
      }
      getWeatherState()
  }, [BASE_API_URL,LOCATION_API, POSITION_API])

  // Sidebar State - Show/Hide Sidebar
  const [sidebarState, setSidebarState] = useState(false);

  return (
      <div className="App">
        <aside className="sidebar" >
          { sidebarState 
            ? (
              <SidebarSearch 
                sidebarState={sidebarState} 
                setSidebarState={setSidebarState}

                setWeatherState={setWeatherState}
              />
            )
            : (
              <>
                <div className="menu" >
                  <button type="submit" 
                    onClick={() => setSidebarState((sidebarState) => !sidebarState)} 
                    className="btn"
                  >
                    Search for places
                  </button>   
                  <button className="btn--icon__round"><MyLocationIcon /></button> 
                </ div>
                <SidebarInfo 
                  city={weatherState}
                  image_url={weatherState.consolidated_weather}
                  temperature={weatherState.consolidated_weather}
                  statusCollection={weatherState.consolidated_weather}
                  date={weatherState.time}
                  predicts={weatherState.consolidated_weather}
                />
              </>
            )
          }  
        </aside>
        <main>
          <ConverUnits />
          <Predicts 
            image_url={weatherState.consolidated_weather}
            temperature={weatherState.consolidated_weather}
            predicts={weatherState.consolidated_weather}
            date={weatherState.time}
          />
          <HighLights 
            consolidated_weather={weatherState.consolidated_weather}
          />
          <p className="copyrgiht">Created by <a href="https://www.antoniochagoya.com.mx" target="_blank" rel="noreferrer">Antonio Chagoya</a></p>
        </main>
      </div>

  );
}

export default App;
