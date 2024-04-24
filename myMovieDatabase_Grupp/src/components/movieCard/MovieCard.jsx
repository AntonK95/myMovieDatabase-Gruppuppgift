import './movieCard.css'

import React from 'react'
import { Link } from 'react-router-dom';

function MovieCard ({ title, poster, imdbID}) {
    return (
        <div key={imdbID} className='search-result__card'>
                <Link to={`/singlefilm/${imdbID}`} className='search-result__link'>
                    <img className='search-result__img' src={poster} alt={title} />
                    <figcaption className='search-result__title'>
                        <h5>{title}</h5>
                    </figcaption>
                </Link>
                <div className="icons-container">
                    <img
                        className="star"
                        src="./src/assets/star.png"
                        alt="Star Icon"
                        //onClick={() => addToFavorites(movie)}
                    />
                    <img
                        className="search-eye"
                        src="./src/assets/eye.png"
                        alt="Eye Icon"
                        //onClick={() => addToWatchList(movie)}
                    />
                </div>
        </div>
        
        
        
        
        // <div className="movie-card">
        //     <div className='icons-container'>
        //         <img src="../../assets/eye.png" alt="" />
        //     </div>
        //     <img src={poster} alt={title} />
        //     <h5>{title}</h5>
        // </div>
    )
}

export default MovieCard;