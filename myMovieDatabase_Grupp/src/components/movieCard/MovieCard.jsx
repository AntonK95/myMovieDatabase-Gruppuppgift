import './movieCard.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ title, poster, imdbID, setFavourites, favourites }) {
    const [watchList, setWatchList] = useState([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavourites(JSON.parse(storedFavorites));
        }

        const storedWatchList = localStorage.getItem('watchlist');
        if (storedWatchList) {
            setWatchList(JSON.parse(storedWatchList));
        }
    }, []);

    const addToFavorites = () => {
        const movie = { title, poster, imdbID,Poster: poster, Title: title };
        if (!isMovieInLocalStorage(movie, favourites)) {
            setFavourites(prevFavorites => [...prevFavorites, movie]);
            localStorage.setItem('favorites', JSON.stringify([...favourites, movie]));
        }
    };

    const addToWatchList = () => {
        const movie = { title, poster, imdbID, Poster: poster, Title: title };
        if (!isMovieInLocalStorage(movie, watchList)) {
            setWatchList(prevWatchList => [...prevWatchList, movie]);
            localStorage.setItem('watchlist', JSON.stringify([...watchList, movie]));
        }
    };

    const isMovieInLocalStorage = (movie, list) => {
        return list.some(item => item.imdbID === movie.imdbID);
    };

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
                    onClick={addToFavorites}
                />
                <img
                    className="search-eye"
                    src="./src/assets/eye.png"
                    alt="Eye Icon"
                    onClick={addToWatchList}
                />
            </div>
        </div>
    );
}

export default MovieCard;