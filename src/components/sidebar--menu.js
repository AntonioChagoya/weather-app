import React, {useState} from 'react';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import SidebarSearch from './sidebar--search';

function SidebarMenu(){

  const [sidebarState, setSidebarState] = useState(false);
  
  return(
    <div className="menu" >
      <button type="submit" 
        onClick={() => setSidebarState((sidebarState) => !sidebarState)} 
        className="btn"
      >
        Search for places
      </button>   
      { sidebarState && <SidebarSearch /> }  

      <button className="btn--icon__round"><MyLocationIcon /></button> 
    </ div>
  )
}

export default SidebarMenu;