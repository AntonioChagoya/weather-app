import React,{useCallback, useState} from 'react';
import CloseIcon from '@material-ui/icons/Close';

function SidebarSearch(sidebarState){
  // Constant url for weather app 
  const BASE_API_URL = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com'
  // Woeid Location information, and a 5 day forecast. This API requieres a woeid number at the end - /api/location/woeid/
  const WOEID_LOCATION_API = '/api/location/search/?query=' 
  // Location information, and a 5 day forecast. This API requieres a woeid number at the end - /api/location/woeid/
  const LOCATION_API = '/api/location/' 

  const [searchState, setSearchState] = useState([])

  const handleInputChange = useCallback(() => { 
    sidebarState.setSidebarState(false)
  },[sidebarState])

  // Update weatherState using search input for location API
  async function searchWoeid(e){
    e.preventDefault()
    try{
      // Woeid Location API query
      const woeidLocationFormatedURL = `${BASE_API_URL}${WOEID_LOCATION_API}${searchState}`
      const woeidLocationResponse = await fetch(woeidLocationFormatedURL)
      const woeidLocationData = await woeidLocationResponse.json();
      const woeid = woeidLocationData[0].woeid

      // Location API query
      const locationFormatedURL = `${BASE_API_URL}${LOCATION_API}${woeid}/`
      const locationResponse = await fetch(locationFormatedURL)
      const locationData = await locationResponse.json();

      // console.log('Search', searchState)
      // console.log('Woeid', woeid)
      // console.log('Location Data', locationData)

      sidebarState.setWeatherState(locationData)
      sidebarState.setSidebarState(false)
    }catch(err){
      console.log(new Error(err))
      alert(`Your search can't be completed, please consult available woeid list at: https://www.findmecity.com/`)
    }
  }

  // Update weatrherState using known cities with location API
  async function cityItem(e){
    e.preventDefault()

    try{
      // Woeid Location API query
      const woeidLocationFormatedURL = `${BASE_API_URL}${WOEID_LOCATION_API}${searchState}`
      const woeidLocationResponse = await fetch(woeidLocationFormatedURL)
      const woeidLocationData = await woeidLocationResponse.json();
      const woeid = woeidLocationData[0].woeid

      // Location API query
      const locationFormatedURL = `${BASE_API_URL}${LOCATION_API}${woeid}/`
      const locationResponse = await fetch(locationFormatedURL)
      const locationData = await locationResponse.json();

      // console.log('Search', searchState)
      // console.log('Woeid', woeid)
      // console.log('Location Data', locationData)

      sidebarState.setWeatherState(locationData)
      sidebarState.setSidebarState(false)
    }catch(err){
      console.log(new Error(err))
    }
    console.log('Search state',searchState)
  }

  return(
    <div className="sidebar--search">
      <div className="search--close">
        <button onClick={handleInputChange} className="search-button__close"><CloseIcon /></button> 
      </div>
      <div className="search--field">
        <form onSubmit={searchWoeid}>
          <div className="search__search-field">
              <input onChange={ e => setSearchState(e.target.value) } type="search" name="city-search" id="searchField" placeholder="Search your city" />
              <button >Search</button>
          </div>
        </form>

        <form onSubmit={cityItem}>
          <div className="search--states-list">
            <ul>
              <li>
                  <button onClick={ e => setSearchState(e.target.value)} type="submit" value="London">London</button>
              </li>
              <li>
                  <button onClick={ e => setSearchState(e.target.value)} type="submit" value="Barcelona">Barcelona</button>
              </li>
              <li>
                  <button onClick={ e => setSearchState(e.target.value)} type="submit" value="Mexico">México</button>
              </li>
              <li>
                  <button onClick={ e => setSearchState(e.target.value)} type="submit" value="New york">New York</button>
              </li>
              <li>
                  <button onClick={ e => setSearchState(e.target.value)} type="submit" value="Paris">París</button>
              </li>
              <li>
                  <button onClick={ e => setSearchState(e.target.value)} type="submit" value="Tokyo">Tokyo</button>
              </li>
            </ul>
          </div>
          
        </form>

      </div>
      
    </div> 
  )
}

export default SidebarSearch;