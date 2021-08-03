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



  // Info state
  const [weatherState, setWeatherState] = useState([]);

  useEffect(() => {
      const getWeatherState = async () => {

        try{
          // Location API petition
          const locationFormatedURL = `${BASE_API_URL}${LOCATION_API}44418/`
          const response = await fetch(locationFormatedURL)
          const locationData = await response.json();

          // console.log('Response data: ', locationData)
          setWeatherState(locationData)
        }catch(err){
          console.log(err)
        }
        
      }
      getWeatherState()
  }, [])

  // Sidebar State
  const [sidebarState, setSidebarState] = useState(false);
  
  return (
      <div className="App">
        <aside className="sidebar" >
          { sidebarState 
            ? (
              <SidebarSearch 
                searchState={sidebarState}
                setSearchState={setSidebarState}
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
          <HighLights />
        </main>
      </div>

  );
}

export default App;
