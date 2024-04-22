import './cards.css';
import { useState } from 'react';
import TrailerModal from '../trailerModal/TrailerModal';

function Cards({ movies }) {
    const [selectedMovie, setSelectedMovie] = useState(null);

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
    };

    const handleCloseModal = () => {
        setSelectedMovie(null);
    };

    return (
        <>
            {movies.map((movie) => (
                <div className='card-container' key={movie.id} onClick={() => handleMovieClick(movie)}>
                    <div className='card-container__img'>
                        <img className="star" src="./src/assets/star.png" alt="Star" />
                        <img className="eye" src="./src/assets/eye.png" alt="Eye" />
                        <img src={movie.poster} alt={movie.title} />
                    </div>
                    <div className='text-container'>
                        <h5>{movie.title}</h5>
                    </div>
                </div>
            ))}
            {selectedMovie && (
                <TrailerModal
                    trailerLink={selectedMovie.trailer_link}
                    title={selectedMovie.title}
                    onClose={handleCloseModal}
                />
            )}
        </>
    );
}

export default Cards;