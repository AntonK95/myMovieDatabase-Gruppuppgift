import './movieCard.css'

import React from 'react'

function MovieCard ({ movie}) {
    
    
    
    return (
        
        <div className="movie-card">
           
            <img src={movie.Poster} alt={movie.Title} />
            <h5>{movie.Title}</h5>
        </div>
    )
}

export default MovieCard;