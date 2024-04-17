import React from 'react'
import './navigation.css'

function NavigationHeader() {
  
  return (
    <>
    
    <div className='nav-container'>
    <div className='list-container'>
    <div className='nav-left'>
    <img src="./src/assets/logga.png"/>
    <p>Favorites</p>
    <p>Watchlist</p>
     </div>
     <div className='nav-right'>
     <input type="text" value="Sök"></input>

     </div>
    </div>
    </div>
    </>
  )
}

export default NavigationHeader
