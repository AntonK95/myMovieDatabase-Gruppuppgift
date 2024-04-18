
import './navigation.css'
import { Link } from 'react-router-dom'

function NavigationHeader() {

  return (
    <>

      <div className='nav-container'>
        <div className='list-container'>
          <div className='nav-left'>
            <Link to='/' role='link' aria-label='link to home'>
              <img className='logo' src="./src/assets/logo.png" />
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
            <input type="text" value="Sök"></input>

          </div>
        </div>
      </div>
    </>
  )
}

export default NavigationHeader
