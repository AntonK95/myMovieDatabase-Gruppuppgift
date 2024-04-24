
import './navigation.css'
import { Link, useNavigate } from 'react-router-dom'

import SearchField from '../searchInput/SearchField'

function NavigationHeader( {setSearchResults}) {

const navigate = useNavigate();



const handleSearch = (searchTerm) => {
  navigate('/SearchResultsPage');
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
            <SearchField setSearchResults={setSearchResults} onSearch={handleSearch} />
          </div>
        </div>
      </div>
    </>
  )
}

export default NavigationHeader
