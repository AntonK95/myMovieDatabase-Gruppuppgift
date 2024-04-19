
// import SearchField from '../SearchField/SearchField'
import './navigation.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

const apiKey = '567f8027';

function NavigationHeader() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`);
      console.log(response.data);
    } catch(error) {
      console.log(error);
    }
  }
  return (
    <>

      <div className='nav-container'>
        <div className='list-container'>
          <div className='nav-left'>
            <Link to='/' role='link' aria-label='link to home'>
              <img className='logo' src="./src/assets/logo.png" alt='logo' />
            </Link>
            <ul>
              <li>
                <Link to='/FavoritePage' role='link' aria-label='link to favourites'>FAVORITES</Link>
              </li>
              <li>
                <Link to='/WatchlistPage' role='link' aria-label='link to Watch list'>WATCH LIST</Link>
              </li>
            </ul>
          </div>
          <div className='nav-right'>
          <form onSubmit={handleSearchSubmit}>
        <input type="text" placeholder='Sök' value={searchTerm} onChange={handleSearchInput}></input>
    </form>
            {/* <SearchField onSearch={ handleSearch }/> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default NavigationHeader
