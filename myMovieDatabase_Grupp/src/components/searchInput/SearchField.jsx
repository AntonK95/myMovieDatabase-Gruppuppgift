
import { useState } from 'react';
import axios from 'axios';

const apiKey = '567f8027';

function SearchField({ setSearchResults, onSearch }) {
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
    </>
  )
}

export default SearchField;