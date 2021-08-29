import React, { useEffect, useState } from 'react'
import "./App.css";

// Components
import SidebarInfo from "./components/sidebar--info";
import SidebarSearch from "./components/sidebar--search";
import Predicts from "./components/predicts";
import ConverUnits from "./components/convertUnits";
import HighLights from "./components/highlights";

// Material UI
import MyLocationIcon from "@material-ui/icons/MyLocation";

function App() {
  // Temporary CORS link
  const temporaryCors = "https://cors-anywhere.herokuapp.com/corsdemo";

  // Constant url for weather app
  const BASE_API_URL =
    "https://cors-anywhere.herokuapp.com/https://www.metaweather.com";

  const LOCATION_API = "/api/location/";

  const POSITION_API = "/api/location/search/?lattlong=";

  const [weatherState, setWeatherState] = useState([]);

  function corsPolicyAlert(temporaryCorsLink) {
    if (
      window.confirm(
        `This just a portfolio temporary app. Does not have SSR.\r\n
        Because of that if you want to see how the app works, please click on accept. You will be redirected to an authenticacion page, where you have to click on "Request temporary access to the demo server" and come back to try the weather app.\r\n
        If you already requested access click on cancel.
        `
      )
    ) {
      window.open(`https://cors-anywhere.herokuapp.com/corsdemo`, "_blank");
    }
  }

  useEffect(() => {

    setTimeout(()=>{
      corsPolicyAlert(temporaryCors);
    })

    const getWeatherState = async () => {
      const getLocation = () =>
        new Promise((resolve, reject) => {
          window.navigator.geolocation.getCurrentPosition(
            (position) => {
              const location = {
                lat: position.coords.latitude,
                long: position.coords.longitude,
              };
              resolve(location);
            },
            (err) => reject(err)
          );
        });

      try {
        // Location Promise resolved
        const coordinatesResponse = await getLocation();
        let lattFormated = coordinatesResponse["lat"].toFixed(2);
        let longFormated = coordinatesResponse["long"].toFixed(2);

        // Position API query
        const positionFormatedURL = `${BASE_API_URL}${POSITION_API}${lattFormated},${longFormated}`;
        const positionResponse = await fetch(positionFormatedURL);
        const positionData = await positionResponse.json();
        let woeid = (await positionData[0].woeid) || 116545;

        // Location API query
        const locationFormatedURL = `${BASE_API_URL}${LOCATION_API}${woeid}/`;
        const locationResponse = await fetch(locationFormatedURL);
        const locationData = await locationResponse.json();
        console.log("Location data ", locationData);

        setWeatherState(locationData);
      } catch (err) {
        // Location API query
        const locationFormatedURL = `${BASE_API_URL}${LOCATION_API}116545/`;
        const locationResponse = await fetch(locationFormatedURL);
        const locationData = await locationResponse.json();

        setWeatherState(locationData);
      }
    };
    getWeatherState();
  }, [BASE_API_URL, LOCATION_API, POSITION_API]);

  const [sidebarState, setSidebarState] = useState(false);

  return (
    <div className="App">
      <aside className="sidebar">
        {sidebarState ? (
          <SidebarSearch
            sidebarState={sidebarState}
            setSidebarState={setSidebarState}
            setWeatherState={setWeatherState}
          />
        ) : (
          <>
            <div className="menu">
              <button
                type="submit"
                onClick={() => setSidebarState((sidebarState) => !sidebarState)}
                className="btn"
              >
                Search for places
              </button>
              <button className="btn--icon__round">
                <MyLocationIcon />
              </button>
            </div>
            <SidebarInfo
              city={weatherState}
              image_url={weatherState.consolidated_weather}
              temperature={weatherState.consolidated_weather}
              statusCollection={weatherState.consolidated_weather}
              date={weatherState.time}
              predicts={weatherState.consolidated_weather}
            />
          </>
        )}
      </aside>
      <main>
        <ConverUnits />
        <Predicts
          image_url={weatherState.consolidated_weather}
          temperature={weatherState.consolidated_weather}
          predicts={weatherState.consolidated_weather}
          date={weatherState.time}
        />
        <HighLights consolidated_weather={weatherState.consolidated_weather} />
        <p className="copyrgiht">
          Created by{" "}
          <a
            href="https://www.antoniochagoya.com.mx"
            target="_blank"
            rel="noreferrer"
          >
            Antonio Chagoya
          </a>
        </p>
      </main>
    </div>
  );
}

export default App;
