
import MovieCard from '../../components/movieCard/MovieCard';
import './searchresultspage.css';




function SearchResultsPage({ searchResults }) { // Ta emot props!!!!
    console.log(searchResults);
    return (
    <section className='search-result__container'>
        <div className="search-results">
            {searchResults && searchResults.Search && searchResults.Search.map(movie => (
                <MovieCard 
                key={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster} 
            />
            ))}
        </div>

        {/* <div className="search-result__movie-card">
            <p>Search Result</p>
        </div>
        <div className="search-result__movie-card">
            <p>Search Result</p>
        </div>
        <div className="search-result__movie-card">
            <p>Search Result</p>
        </div>
        <div className="search-result__movie-card">
            <p>Search Result</p>
        </div>
        <div className="search-result__movie-card">
            <p>Search Result</p>
        </div>
        <div className="search-result__movie-card">
            <p>Search Result</p>
        </div>
        <div className="search-result__movie-card">
            <p>Search Result</p> 
        </div>
        <div className="search-result__movie-card">
            <p>Search Result</p>
        </div> */}
    </section>
  )
}

export default SearchResultsPage;