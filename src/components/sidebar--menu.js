import React from 'react';
import MyLocationIcon from '@material-ui/icons/MyLocation';

function SidebarMenu(){

  return(
    <section className="sidebar--menu" >
      <button className="btn">Search for places</button>      
      <button className="btn--icon__round">
        <MyLocationIcon />
      </button> 
    </ section>
  )
}

export default SidebarMenu;