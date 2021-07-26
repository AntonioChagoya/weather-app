import React, {useState, useEffect} from 'react';
import './App.css';
import SidebarInfo from './components/sidebar--info';
// import SidebarMenu from './components/sidebar--menu'
import SidebarSearch from './components/sidebar--search';
import MyLocationIcon from '@material-ui/icons/MyLocation';


function App() {

  const [weatherState, setWeatherState] = useState([]);
  useEffect(() => {
    const getWeatherState = async () => {
      const formatedURL= `https://www.metaweather.com/api/location/2487956/ `

      const response = await fetch(formatedURL)
      const data = await response.json();

      console.log('Response data: ', data)
      setWeatherState(data)
      }
    getWeatherState()
  }, [])

  const [sidebarState, setSidebarState] = useState(false);
  
  return (
      <div className="App">
        

      <section className="sidebar" >
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
              />
            </>
          )
        }  

        
    </section>
    </div>

  );
}

export default App;
