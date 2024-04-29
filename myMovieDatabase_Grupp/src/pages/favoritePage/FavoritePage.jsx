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

    const handleRemoveFromFavourites = (movie) => {
        const confirmDelete = window.confirm('Are you sure you want to remove the movie from favourites?');
        if(confirmDelete) {
            const updatedFavorites = favoriteMovies.filter(fav => fav.imdbID !== movie.imdbID);
            setFavoriteMovies(updatedFavorites);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        }
    }//funktion som tar bort data från favs när usern klickar på remove.

    return (//här renderas varje film ut som en div.
    <section className='favorite-page__container'>
        <section className='favorite__container'>
        {favoriteMovies.length > 0 ? (
            favoriteMovies.map((movie) => (
                <div key={movie.imdbID} className="favorite__movie-card">
                    <img src={movie.Poster} alt={movie.Title} />
                    <h3>{movie.Title}</h3>
                    <button onClick={() => handleRemoveFromFavourites(movie)}>Remove</button>
                </div>
            ))
        ) : (
            <p>No favorite movies yet.</p>
        )}
    </section>
    </section>
    );
}

export default FavoritePage;