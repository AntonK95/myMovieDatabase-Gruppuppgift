import React, { useState, useEffect } from 'react';
import SingleFilmPage from '../singleFilmPage/SingleFilmPage'; // Denna läses inte nu då vi har kommenterat bort Link runt "om-filmen__btn"
import './homepage.css';
import { Link } from 'react-router-dom'; // Denna läses inte nu då vi har kommenterat bort Link runt "om-filmen__btn"
import Cards from '../../components/cards/Cards';
import FeatureRight from '../../components/features/FeatureRight';
import FeatureLeft from '../../components/features/FeatureLeft';


function Homepage({ movies }) {
    
    // lista med posters och en lista med film titels
    const imageList = ['scream-hero.png', 'starwars.png', 'insideout.jpeg'];
    const filmTitle = ['Scream VI', 'Star Wars The Phantom Menace', 'Inside Out'];

    // State för att hålla reda på index för aktuell bild/titel
    const [currentImage, setCurrentImage] = useState(0);
    const [currentTitle, setCurrentTitle] = useState(0);

    // Effekt som byter bild samt titel var 10:e sekund
    useEffect(() => {
        const interval = setInterval(() => {
            // Uppdatera index för nästa bild/titel, återgå till första om det är den sista
            setCurrentImage(currentImage => (currentImage + 1) % imageList.length);
            setCurrentTitle(currentTitle => (currentTitle + 1) % filmTitle.length);
        }, 10000); // 10 sek
        // rensa upp 
        return () => clearInterval(interval);
    }, []); // Tomt då effekten endast körs en gång

    return (
        <div className="website__container">
            <section className='hero__container'>
                <div className="hero__background-left"></div>
                {/* Byt ut slutet av src-attributet baserat på det aktuella indexet */}
                <img src={`./src/assets/${imageList[currentImage]}`} alt="Movie Picture" className="homepage__hero" />
                <div className="hero__content">
                    {/* Använd currentTitle för att visa den aktuella titeln (indexet) */}
                    <h1>{filmTitle[currentTitle]}</h1>
                    {/* <Link to='/SingleFilmPage' role='link' element={<SingleFilmPage />}> */} 
                        <button className="om-filmen__btn">OM FILMEN</button> {/* Denna knappen leder ingenstan, därav avkommenterad Link */}
                    {/* </Link> */}
                </div>
            </section>
            <section className='top-films__container'>
                <h2 className='top-films__h2'>TOP FILMS</h2>
                <section className='top-films-grid'>
                    {/* Här läser vi in en kort komponent för att rendera 20 top filmer */}
                    <Cards movies={movies} />
                </section>
            </section>
            <section className='features__container'>
                <h2 className='features__title'>Features</h2>
                <section className='features__container--both'>
                    <FeatureLeft />
                    <FeatureRight />
                </section>
            </section>
        </div>
    );
}

export default Homepage;
