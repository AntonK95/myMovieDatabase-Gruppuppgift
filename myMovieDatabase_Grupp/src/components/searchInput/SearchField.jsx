
import { useState } from 'react';
import axios from 'axios';
import MovieCard from '../movieCard/MovieCard';

const apiKey = '567f8027';

function SearchField({ onSearch }) {
  const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    const handleSearchInput = (event) => {
      setSearchTerm(event.target.value);
      onSearch(event.target.value);
      console.log(event.target.value);
    };
  
    const handleSearchSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`);
        setSearchResults(response.data.Search);
        console.log(response.data.Search);
      } catch(error) {
        console.log(error);
      }

    };
  return (
    <>
      <div>
        <form onSubmit={handleSearchSubmit}>
            <input 
              type="text" 
              placeholder='Sök' 
              value={searchTerm} 
              onChange={handleSearchInput}>
            </input>
        </form>
        </div>
        <div>
        {searchResults.map((result, index) => (
          <MovieCard 
            key={ index }
            title={result.Title}
            poster={result.Poster}
          />
        ))}
        {/* <div>
          {searchResults.map((results, index) => (
            <div key={ index }>
              <h5>{ results.Title }</h5>
              <img src={ results.Poster } alt={ results.Title } />
            </div>
          ))}
        </div> */}
        </div>
      
    </>
  )
}

export default SearchField;