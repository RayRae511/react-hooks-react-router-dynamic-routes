import React from "react";
import { Route } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  const match = useRouteMatch()

  return(
    <>
      <MoviesList movies={movies}/>
      <Route exact path = {match.url}><h3>Choose a movie from the above</h3></Route>
      <Route path={`${match.url}/:movieId`}><MovieShow movies={movies}/></Route>
    </>
  )
}
export default MoviesPage;
