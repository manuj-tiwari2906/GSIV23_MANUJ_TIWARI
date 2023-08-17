import React from 'react'
import { MovieCard } from './@component';
import './movie-list.scss';

const MovieList = () => {
  return (
    <div className='movie-list-container' >
        <MovieCard />
    </div>
  )
}

export default MovieList;