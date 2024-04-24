
import MovieCard from '../../components/movieCard/MovieCard';
import './searchresultspage.css';
// import axios from 'axios';
// import {useState} from 'react';





function SearchResultsPage({ searchResults }) { // Ta emot props!!!!
    console.log(searchResults);
    return (
    <section className='search-result__container'>
        <div className="search-results">
            {
                searchResults.map((movie, index) => {
                    return <MovieCard 
                    key={index} 
                    imdbID={movie.imdbID} 
                    title={movie.Title} 
                    poster={movie.Poster}/>
                })
            }
        </div>
    </section>
  )
}

export default SearchResultsPage;