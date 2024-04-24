import './movieCard.css'

import React from 'react'

function MovieCard ({ title, poster}) {
    return (
        <div className="movie-card">
            <div className='icons-container'>
                <img src="../../assets/eye.png" alt="" />
            </div>
            <img src={poster} alt={title} />
            <h5>{title}</h5>
        </div>
    )
}

export default MovieCard;