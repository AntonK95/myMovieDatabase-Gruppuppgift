

import './App.css'
import Homepage from './pages/homepage/Homepage.jsx'
import Footer from './components/footer/Footer'
import NavigationHeader from './components/header/NavigationHeader.jsx';


import WatchlistPage from './pages/watchlistPage/WatchlistPage.jsx';
import FavoritePage from './pages/favoritePage/FavoritePage.jsx';
import SearchResultsPage from './pages/searchResultsPage/SearchResultsPage.jsx';
import { Routes, Route } from 'react-router-dom'
import axios from 'axios';


function App() {


async function myTopMovies() {
    try {
        const response = await axios.get('https://santosnr6.github.io/Data/movies.json');

        const topMoviesData = response.data;
        // topMoviesData.forEach(movie => {
        //     console.log(movie);
        // });
        return topMoviesData;

    } catch (error) {
        console.log('Ojsan, något gick fel. Kan inte hämta data från API', error);
        return [];
    }
}
console.log(myTopMovies);

  return (


    <div className="app">
      <NavigationHeader />
      <section className='inner__page-container'>

        
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/SearchResultsPage' element={<SearchResultsPage />} />
          <Route path='/FavoritePage' element={<FavoritePage />} />
          <Route path='/WatchlistPage' element={<WatchlistPage />} />
        </Routes>

      </section>
      <Footer />
    </div>


  )

}

export default App;
