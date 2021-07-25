import React, {useState, useEffect} from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import SidebarMenu from './components/sidebar--menu'

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
      <section className="sidebar" > 
        <SidebarMenu />
        <Sidebar 
          city={weatherState}
        />
    </section>
    </div>

  );
}

export default App;
