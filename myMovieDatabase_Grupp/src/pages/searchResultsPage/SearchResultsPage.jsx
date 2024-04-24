
import MovieCard from '../../components/movieCard/MovieCard';
import './searchresultspage.css';
// import axios from 'axios';
import {useState} from 'react';
import { useEffect } from 'react';





function SearchResultsPage({ searchResults }) { // Ta emot props!!!!
    const [favourites, setFavourites] = useState([]);
    console.log(searchResults);

useEffect(() => {
console.log(favourites);
}, [favourites])

    return (
    <section className='search-result__container'>
        <div className="search-results">
            {
                searchResults.map((movie, index) => {
                    return <MovieCard 
                    setFavourites={setFavourites}
                    favourites={favourites}
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