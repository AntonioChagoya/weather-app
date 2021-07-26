import React from 'react';
import CloseIcon from '@material-ui/icons/Close';

function SidebarSearch(){

  return(
    <div className="sidebar--search">
      <div className="search--close">
        <CloseIcon />
      </div>
      <div className="search--field">
        <form action="post">
          <div className="search__search-field">
            <input type="search" name="city-search" id="" placeholder="search location" />

            <label htmlFor="search">Search</label>
            <input type="button"  id="search" />
          </div>
          <div className="search--states-list">
            <ul>
              <li>London</li>
              <li>Barcelona</li>
              <li>México</li>
            </ul>
          </div>

        </form>
      </div>
      
    </div> 
  )
}

export default SidebarSearch;