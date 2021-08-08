import React,{useCallback, useState} from 'react';
import CloseIcon from '@material-ui/icons/Close';

function SidebarSearch(sidebarState){

  const handleInputChange = useCallback(() => { 
    sidebarState.setSidebarState(false)
  },[sidebarState])

  const [searchState, setSearchState] = useState([])
  function searchWoeid(e){
    e.preventDefault()
    console.log(searchState)
  }

  return(
    <div className="sidebar--search">
      <div className="search--close">
        <button onClick={handleInputChange} className="search-button__close"><CloseIcon /></button> 
      </div>
      <div className="search--field">
        <form onSubmit={searchWoeid}>
          <div className="search__search-field">
              <input onChange={ e => setSearchState(e.target.value) } type="search" name="city-search" id="searchField" placeholder="search location" />
              <button >Search</button>
          </div>
          <div className="search--states-list">
            <ul>
              <li>
                  <input type="button" value="London" /> 
              </li>
              <li>
                  <input type="button" value="Barcelona" /> 
              </li>
              <li>
                  <input type="button" value="México" /> 
              </li>
              <li>
                  <input type="button" value="México" /> 
              </li>
              <li>
                  <input type="button" value="México" /> 
              </li>
              <li>
                  <input type="button" value="México" /> 
              </li>
            </ul>
          </div>

        </form>
      </div>
      
    </div> 
  )
}

export default SidebarSearch;