import React from 'react';
import SingleFilmPage from '../singleFilmPage/SingleFilmPage';
import './homepage.css';
import { Link } from 'react-router-dom';
import Cards from '../../components/cards/Cards';


function Homepage({ movies }) {
    return (
        <div className="website__container">
            <section className='hero__container'>
                <div className="hero__background-left"></div>
                <img src="./src/assets/scream-hero.png" alt="Movie Picture" className="homepage__hero" />
                <div className="hero__content">
                    <h1>Film Title</h1>
                    <Link to='/SingleFilmPage' role='link' element={<SingleFilmPage />}>
                        <button className="om-filmen__btn">OM FILMEN</button>
                    </Link>
                </div>
            </section>
            <section className='top-films__container'>
                <h2 className='top-films__h2'>TOP FILMS</h2>
                <section className='top-films-grid'>
                    <Cards movies={movies} />
                </section>
            </section>
            <section className='features__container'>
                <h2>Features</h2>
                <article></article>
                <article></article>
            </section>
        </div>
    );
}

export default Homepage;
