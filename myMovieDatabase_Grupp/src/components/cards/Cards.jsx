import React from 'react'
import './cards.css'

function Cards({
  movies

}) {




  return (
    <>
      {
        movies.map((movie) => {

          return (
          
              <div className='card-container'>
                

                <div className='card-container__img'>
                <img className="star" src="./src/assets/star.png" />
                <img className="eye" src="./src/assets/eye.png" />
                  
                  <img src={movie.poster} />
                </div>


                <div className='text-container'>

                 <h5>{movie.title}</h5>
                </div>
              
              </div>
            
          )


        })
      }


    </>
  )
}

export default Cards