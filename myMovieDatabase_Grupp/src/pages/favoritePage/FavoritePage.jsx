import { useState, useEffect } from 'react';
import './favoritepage.css';

function FavoritePage() {
    const [favoriteMovies, setFavoriteMovies] = useState([]); //useState Hook i form av tillståndsvariabel

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavoriteMovies(JSON.parse(storedFavorites));
        }
    }, []);// hämtar sparade filmer från localstorage. Tolkas från JSON format och sätts till tillstandsvariabel favoriteMovies.

    return (
        <section className='favorite__container'>
        {favoriteMovies.length > 0 ? (
            favoriteMovies.map((movie) => (
                <div key={movie.imdbID} className="favorite__movie-card">
                    <img src={movie.Poster} alt={movie.Title} />
                    <h3>{movie.Title}</h3>
                </div>
            ))
        ) : (
            <p>No favorite movies yet.</p>
        )}
    </section>
    );
}

export default FavoritePage;