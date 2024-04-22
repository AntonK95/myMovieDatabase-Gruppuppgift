

import './App.css'
import Homepage from './pages/homepage/Homepage.jsx'
import Footer from './components/footer/Footer'
import NavigationHeader from './components/header/NavigationHeader.jsx';


import WatchlistPage from './pages/watchlistPage/WatchlistPage.jsx';
import FavoritePage from './pages/favoritePage/FavoritePage.jsx';
import SearchResultsPage from './pages/searchResultsPage/SearchResultsPage.jsx';
import SingleFilmPage from './pages/singleFilmPage/SingleFilmPage.jsx';
import { Routes, Route } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';
// import SearchMovies from './components/searchMovies/SearchMovies.jsx';


function App() {

  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const topMovies = async () => {
    try {
      const response = await axios.get('https://santosnr6.github.io/Data/movies.json');
      setMovies(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    topMovies();
  }, []);



  return (

    <div className="app">
      <NavigationHeader />
      <section className='inner__page-container'>

        <Routes>
          <Route path='/' element={<Homepage movies={movies} />} />
          <Route path='/SearchResultsPage' element={<SearchResultsPage searchResults={searchResults} />} />
          <Route path='/FavoritePage' element={<FavoritePage />} />
          <Route path='/WatchlistPage' element={<WatchlistPage />} />
          <Route path='/SingleFilmPage' element={<SingleFilmPage />} />
        </Routes>
      </section>
      <Footer />
    </div>


  )

}

export default App;
