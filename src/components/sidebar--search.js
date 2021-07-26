import React,{useCallback} from 'react';
import CloseIcon from '@material-ui/icons/Close';

function SidebarSearch(searchState, setSearchState){

  const handleInputChange = useCallback(() => { 
      searchState.setSearchState(false)
  },[searchState])

  return(
    <div className="sidebar--search">
      <div className="search--close">
        <button onClick={handleInputChange} className="search-button__close"><CloseIcon /></button> 
      </div>
      <div className="search--field">
        <form action="post">
          <div className="search__search-field">
            <input type="search" name="city-search" id="" placeholder="search location" />
            <button>Search</button>
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