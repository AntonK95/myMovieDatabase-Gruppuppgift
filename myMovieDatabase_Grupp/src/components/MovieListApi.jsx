
import axios from 'axios'


const getMovieList = async () => {
const res = await axios.get('https://santosnr6.github.io/Data/movies_long.json')
console.log(res.data)
    
}




function MovieListApi() {

  
    return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

export default MovieListApi
