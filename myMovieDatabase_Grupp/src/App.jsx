

import './App.css'
import Homepage from './pages/homepage/Homepage.jsx'
import Footer from './components/footer/Footer'
import NavigationHeader from './components/header/NavigationHeader.jsx';
import WatchlistPage from './pages/watchlistPage/WatchlistPage.jsx';
import FavoritePage from './pages/favoritePage/FavoritePage.jsx';
import SearchResultsPage from './pages/searchResultsPage/SearchResultsPage.jsx';

function App() {

  return (


    <div className="app">
      <NavigationHeader />
      <section className='inner__page-container'>
        <Homepage />
        <SearchResultsPage />
        <FavoritePage />
        <WatchlistPage />
      </section>
      <Footer />
    </div>


  )

}

export default App;
