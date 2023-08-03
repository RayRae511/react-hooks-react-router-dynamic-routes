import React from 'react'

function MovieList({movies}){
    const renderMovies = Object.keys(movies).map((movieId) => (
        <li key={movieId}>
            <link to={`/movies/${movieId}`}>{movies[movieId].title}</link>
        </li>
    ))
  return (<div><ul>{renderMovies}</ul></div>)
}

export default MovieList