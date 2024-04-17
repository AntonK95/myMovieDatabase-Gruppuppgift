

import './App.css'
import Homepage from './pages/homepage/Homepage.jsx'
import Footer from './components/footer/Footer'
import NavigationHeader from './components/header/NavigationHeader.jsx';
import FavoritePage from './pages/favoritePage/FavoritePage.jsx';

function App() {

  return (


    <div className="app">
      <NavigationHeader />
      <section className='inner__page-container'>
        <Homepage />
      
        <FavoritePage />
      </section>
      <Footer />
    </div>


  )

}

export default App;
