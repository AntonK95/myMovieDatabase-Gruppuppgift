import './homepage.css'

function Homepage() {
    return (
        <div className="website__container">
            <section className='hero__container'>
                <div className="hero__background-left"></div>
                <img src="./src/assets/scream-hero.png" alt="movie picture" className="homepage__hero" />
                <div className="hero__content">
                    <h1>Film Title</h1>
                    <button className="om-filmen__btn">
                        OM FILMEN
                    </button>
                </div>
            </section>
                <section className='top-films__container'>
                    <h2>TOP FILMS</h2>
                    <article></article>
                    <article></article>
                    <article></article>
                    <article></article>
                </section>
            <section className='features__container'>
                <h2>Features</h2>
                <article></article>
                <article></article>
            </section>
        </div>
    )
}

export default Homepage
