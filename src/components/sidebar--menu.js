import React from 'react';
import MyLocationIcon from '@material-ui/icons/MyLocation';

function SidebarMenu(){

  return(
    <div className="menu" >
      <button className="btn">Search for places</button>      
      <button className="btn--icon__round"><MyLocationIcon /></button> 
    </ div>
  )
}

export default SidebarMenu;