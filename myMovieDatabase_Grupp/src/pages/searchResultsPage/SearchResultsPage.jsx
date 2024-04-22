
import './searchresultspage.css';
import axios from 'axios';
import {useState} from 'react';


function SearchResultsPage() {

    const [selectedMovie, setSelectedMovie] = useState([]);
    const [detailedMovie, setDetailedMovie] = useState([]);

    const handleMovieClick = async (movie) => {
        setSelectedMovie(movie);

        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=fa22e288&i=${encodeURIComponent(movie.imdbID)}&plot=full&r=json`);
            if (response.data.Response === 'True') {
                setDetailedMovie(response.data);
            } else {
                setDetailedMovie(null);
            }
        } catch (error) {
            console.error('Ett fel inträffade när detaljade informationen hämtades');
            setDetailedMovie(null);
        }
    }

    const handleCloseMovieDetails = () => {
        setSelectedMovie(null);
        setDetailedMovie(null);
    }

    return (
        <section className='search-result__container'>
            <div className="search-result__movie-card">
                <p>Search Result</p>
            </div>
            <div className="search-result__movie-card">
                <p>Search Result</p>
            </div>
            <div className="search-result__movie-card">
                <p>Search Result</p>
            </div>
            <div className="search-result__movie-card">
                <p>Search Result</p>
            </div>
            <div className="search-result__movie-card">
                <p>Search Result</p>
            </div>
            <div className="search-result__movie-card">
                <p>Search Result</p>
            </div>
            <div className="search-result__movie-card">
                <p>Search Result</p>
            </div>
            <div className="search-result__movie-card">
                <p>Search Result</p>
            </div>
            {
                selectedMovie && detailedMovie && (
                    <MovieDeatails
                    movie={detailedMovie}
                    onClose={handleCloseMovieDetails} />
                )
            }
        </section>
    )
}

export default SearchResultsPage;