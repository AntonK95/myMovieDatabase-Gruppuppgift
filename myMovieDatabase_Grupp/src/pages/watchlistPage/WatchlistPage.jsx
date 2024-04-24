import { useState, useEffect } from 'react';
import './watchlistpage.css';

function WatchlistPage() {
    const [watchlistMovies, setWatchlistMovies] = useState([]); //useState Hook i form av tillståndsvariabel

    useEffect(() => {
        const storedWatchlist = localStorage.getItem('watchlist');
        if (storedWatchlist) {
            setWatchlistMovies(JSON.parse(storedWatchlist));
        }
    }, []);// hämtar sparade filmer från localstorage. Tolkas från JSON format och sätts till tillstandsvariabel favoriteMovies.

    const handleRemoveFromWatchlist = (movie) => {
        const confirmDelete = window.confirm('Are you sure you want to remove the movie from watch list?');
        if(confirmDelete) {
            const updatedWatchlist = watchlistMovies.filter(fav => fav.imdbID !== movie.imdbID);
            setWatchlistMovies(updatedWatchlist);
            localStorage.setItem('favorites', JSON.stringify(updatedWatchlist));
        }
    }

    return (
        <section className='watchlist__container'>
        {watchlistMovies.length > 0 ? (
            watchlistMovies.map((movie) => (
                <div key={movie.imdbID} className="favorite__movie-card">
                    <img src={movie.Poster} alt={movie.Title} />
                    <h3>{movie.Title}</h3>
                    <button onClick={() => handleRemoveFromWatchlist(movie)}>Remove</button>
                </div>
            ))
        ) : (
            <p>No watch list movies yet.</p>
        )}
    </section>
    );
}

export default WatchlistPage;