import React from 'react'
import { MovieCard } from './@component';
import './movie-list.scss';
import useFetch from '../../../hooks/useFetch';
import userService from '../../../services/user.service';
import { Spinner } from '../../common/spinner';
import { isNotEmptyArray } from '../../common/utils/utils';

const MovieList = ({ searchTerm }) => {

    const movieList = useFetch({ apiCall: userService.getLatestMovies })

    const filteredMovies = movieList.data?.results.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if(movieList.loading) {
        return <Spinner />
    }
    
  return (
    <div className='movie-list-container' >
        {
            movieList.data && movieList.data?.results && isNotEmptyArray(movieList.data.results) &&
            filteredMovies.map((movie, movieIndex) => (
                <MovieCard key={movieIndex} movie={movie} />
            ))
        }
    </div>
  )
}

export default MovieList;