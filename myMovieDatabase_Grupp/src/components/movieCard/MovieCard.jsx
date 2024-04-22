import './movieCard.css'

import React from 'react'

function MovieCard ({ title, poster}) {
    return (
        <div className="movie-card">
            <img src={poster} alt={title} />
            <h5>{title}</h5>
        </div>
    )
}

export default MovieCard;