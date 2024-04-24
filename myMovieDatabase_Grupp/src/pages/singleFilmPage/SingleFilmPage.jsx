import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './singleFilmPage.css'


function SingleFilmPage() {
    const { imdbID } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(`http://www.omdbapi.com/?apikey=fa22e288&i=${encodeURIComponent(imdbID)}&plot=full&r=json`);
                if (response.data.Response === 'True') {
                    setMovieDetails(response.data);
                    setError('');
                    console.log(response.data);
                } else {
                    setError(response.data.Error || 'No results found.');
                }
            } catch (Error) {
                console.error('An error occurred while fetching movie details:', error);
                setError('An error occurred while fetching data');
            }
        };
        fetchMovieDetails();
    }, [imdbID]);

    if (error) {
        return <p>{error}</p>
    }

    if (!movieDetails) {
        return <p>Loading...</p>;
    }


    return (
        <div className='single-page__container'>
            <section className="singleHero__container">
                
                <img src={movieDetails.Poster} alt="Movie poster" className="singleFilm__hero" />
                <h1 className='singlePage__h1'>{movieDetails.Title}</h1>
                <article className="singleHero__content">
                    <Link to="/SearchResultsPage" className="singlePage__btn">Back to Search</Link>
                </article>
            </section>
            <section className="detailed-info__container">
                <article className="details__left">
                    <img src={movieDetails.Poster} alt="Movie poster" className="detailed-info__img" />
                </article>
                <article className="details__right">
                    <h2>{movieDetails.Title}</h2>
                    <p>{movieDetails.Plot}</p>
                    <p>Year: {movieDetails.Year}</p>
                    <p>Actors: {movieDetails.Actors}</p>
                </article>
            </section>
        </div>
    );
}

export default SingleFilmPage;
