
import { useState } from 'react';
import axios from 'axios';
import SearchResultsPage from '../../pages/searchResultsPage/SearchResultsPage';

const apiKey = '567f8027';

function SearchField({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchInput = (event) => {
      const searchResults = setSearchTerm(event.target.value);
      onSearch(event.target.value);
      <SearchResultsPage searchresults = {searchResults}/> 

    };
  
    const handleSearchSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`);
        
      } catch(error) {
        console.log(error);
      }
    };
  return (
    <form onSubmit={handleSearchSubmit}>
        <input type="text" placeholder='Sök' value={searchTerm} onChange={handleSearchInput}></input>
    </form>
  )
}

export default SearchField;