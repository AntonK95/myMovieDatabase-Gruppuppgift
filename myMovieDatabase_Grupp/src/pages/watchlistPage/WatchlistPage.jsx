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
            localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
        }
    }//callback funktion triggas när användaren klickar på remove btn.

    return (
        <section className='watchlist-page__container'>
            <section className='watchlist__container'>
                {watchlistMovies.length > 0 ? (//är watchMoviesList inte tom så körs nästa annars felmeddelande.
                    watchlistMovies.map((movie) => (

                        <div key={movie.imdbID} className="watchlist__movie-card">
                            <img src={movie.Poster} alt={movie.Title} />
                            <h3>{movie.Title}</h3>
                            <button onClick={() => handleRemoveFromWatchlist(movie)}>Remove</button>
                        </div>
                    ))//renderar ut varje filmcard
                ) : (
                    <p>No watch list movies yet.</p>
                )}
            </section>
        </section>
    );
}

export default WatchlistPage;