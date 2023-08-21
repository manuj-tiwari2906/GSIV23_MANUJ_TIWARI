import React from "react";
import "./movie-card.scss";
import { Tooltip } from "antd";
import StarRating from "./star-rating";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/${movie?.title}/${movie?.id}`)}
      className="movie-card"
    >
      <div className="backdrop-container">
        <img src={"https://image.tmdb.org/t/p/w300/" + movie?.poster_path} />
      </div>
      <div className="description-container">
        <div className="title-and-rating">
          <Tooltip title={movie?.title}>
            <div className="title">{movie?.title}</div>
          </Tooltip>
          <div className="rating">
            {/* <StarRating rating={movie?.vote_average} /> */}
            IMDB {movie?.vote_average}/10
          </div>
        </div>
        <div className="description">{movie?.overview}</div>
      </div>
    </div>
  );
};

export default MovieCard;
