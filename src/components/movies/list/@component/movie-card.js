import React from 'react';
import './movie-card.scss';
import { Tooltip } from 'antd';
import StarRating from './start-rating';

const MovieCard = ({ movie }) => {

    console.log(movie, 'movie')

  return (
    <div className='movie-card'>
        <div className='backdrop-container'>
            <img src={'https://image.tmdb.org/t/p/w300/' + movie?.poster_path} />
        </div>
        <div className='description-container'>
            <div className='title-and-rating'>
                <Tooltip title={movie?.title}>
                    <div className='title'>{movie?.title}</div>
                </Tooltip>
                <div className='rating'>
                    <StarRating rating={movie?.vote_average} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieCard;