
import MovieCard from '../../components/movieCard/MovieCard';
import './searchresultspage.css';



 

function SearchResultsPage({ searchResults }) { // Ta emot props!!!!
    console.log(searchResults)
    return (
    <section className='search-result__container'>
        <div className="search-results">
            {searchResults && searchResults.Search && searchResults.Search.map(movie => (
                <MovieCard movies={movie}
                
            />
            ))}
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
        </div>
        <div className="search-result__movie-card">
            <p>Search Result</p>



function SearchResultsPage({ searchResults }) {
    console.log(searchResults);
    return (
    <section className='search-result__container'>
        <div className="search-results">
            {
                searchResults.map((movie, index) => {
                    return <MovieCard key={index} title={movie.Title} poster={movie.Poster}/>
                })
            }

        </div>
    </section>
  )
}

export default SearchResultsPage;