import './singleFilmPage.css'


function SingleFilmPage({ movie, onClose}) {

    return (
        <div className='single-page__container'>
            <section className="singleHero__container">
                <img src="./src/assets/scream-hero.png" alt="movie picture" className="singleFilm__hero" />
                <h1 className='singlePage__h1'>MOVIE DETAILS</h1>
                <article className="singleHero__content">
                    <button className="singlePage__btn">SE TRAILER</button>
                </article>
            </section>
            <section className="detailed-info__container">
                <article className="details__left">
                    <img src="" alt="movie poster" className="detailed-info__img" />
                </article>
                <article className="details__right">
                    <h2>{movie.Title}</h2>
                    <p className='p__margin'>{movie.Plot}</p>
                    <p>{movie.Year}</p>
                    <button onClick={onClose} className='singlePage__btn' >Tillbaka</button>
                </article>
            </section>
            <section className="more-movies__container">
                <h2>MORE MOVIES</h2>

            </section>
        </div>
    )
}

export default SingleFilmPage
