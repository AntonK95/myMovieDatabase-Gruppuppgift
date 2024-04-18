

import './App.css'
import Homepage from './pages/homepage/Homepage.jsx'
import Footer from './components/footer/Footer'
import NavigationHeader from './components/header/NavigationHeader.jsx';
import WatchlistPage from './pages/watchlistPage/WatchlistPage.jsx';

function App() {

  return (


    <div className="app">
      <NavigationHeader />
      <Homepage />
      <WatchlistPage />
      <Footer />
    </div>


  )

}

export default App;
