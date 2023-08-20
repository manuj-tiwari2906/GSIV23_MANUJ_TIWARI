import React from 'react'
import { MovieCard } from './@component';
import './movie-list.scss';
import useFetch from '../../../hooks/useFetch';
import userService from '../../../services/user.service';
import { Spinner } from '../../common/spinner';
import { isNotEmptyArray } from '../../common/utils/utils';

const MovieList = () => {

    const movieList = useFetch({ apiCall: userService.getLatestMovies })
    console.log(movieList, 'list')

    if(movieList.loading) {
        return <Spinner />
    }
    
  return (
    <div className='movie-list-container' >
        {
            movieList.data && movieList.data?.results && isNotEmptyArray(movieList.data.results) &&
            movieList.data.results.map((movie, movieIndex) => (
                <MovieCard key={movieIndex} movie={movie} />
            ))
        }
    </div>
  )
}

export default MovieList;