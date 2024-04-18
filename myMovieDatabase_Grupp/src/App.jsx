

import './App.css'
import Homepage from './pages/homepage/Homepage.jsx'
import Footer from './components/footer/Footer'
import NavigationHeader from './components/header/NavigationHeader.jsx';
import Cards from './components/cards/Cards.jsx';

function App() {

  return (


    <div className="app">
      <NavigationHeader />
      <Homepage />
      
      <Footer />
    </div>


  )

}

export default App;
