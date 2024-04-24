import './favoritepage.css'
import { useState } from 'react'
import React from 'react'

function FavoritePage() {
  
   const [addfaovrite, setaddFavorite] = useState([])

   function handleAddFavorites(e){
   console.log(e)

   }
    return (
    <section className='favorite__container'>
        <div className="favorite__movie-card">
            <p>Favorite Movie</p>
        </div>
        <div className="favorite__movie-card">
            <p>Favorite Movie</p>
        </div>
        <div className="favorite__movie-card">
            <p>Favorite Movie</p>
        </div>
        <div className="favorite__movie-card">
            <p>Favorite Movie</p>
        </div>
        <div className="favorite__movie-card">
           <p>Favorite Movie</p> 
        </div>
        <div className="favorite__movie-card">
           <p>Favorite Movie</p> 
        </div>
        <div className="favorite__movie-card">
            <p>Favorite Movie</p>
        </div>
        <div className="favorite__movie-card">
            <p>Favorite Movie</p>
        </div>
    </section>
  )
}

export default FavoritePage