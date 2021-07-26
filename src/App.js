import React, {useState, useEffect} from 'react';
import './App.css';
import SidebarInfo from './components/sidebar--info';
import SidebarMenu from './components/sidebar--menu'
import SidebarSearch from './components/sidebar--search';


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

  return (
    <div className="App">
      <section className="search">
        <SidebarSearch /> 
      </section> 

      <section className="sidebar" >
        <SidebarMenu />
        <SidebarInfo 
          city={weatherState}
          image_url={weatherState.consolidated_weather}
          temperature={weatherState.consolidated_weather}
          statusCollection={weatherState.consolidated_weather}
          date={weatherState.time}
        />
    </section>
    </div>

  );
}

export default App;
