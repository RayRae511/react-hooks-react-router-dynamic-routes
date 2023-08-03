import React from 'react'
import {useParam} from "react-router-dom"

function MovieShow({movies}){
    const parameter = useParam()
    console.log(parameter)
  return (
    <div>
        <h3>{movies[parameter.movieId].title}</h3>
    </div>
  )
}

export default MovieShow