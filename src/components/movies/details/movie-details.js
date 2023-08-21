import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import userService from "../../../services/user.service";
import { Spinner } from "../../common/spinner";
import { isEmptyObject } from "../../common/utils/utils";
import { StarRating } from "../list/@component";
import "./movie-details.scss";
import ErrorApi from "../../common/error-api/error-api";
import { Button } from "antd";

const MovieDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true);
    userService.getMovieDetails({ id }).then(
      (response) => {
        setLoading(false);
        setData(response.data);
      },
      (error) => {
        setError(error);
        setLoading(false);
      }
    );
  }, [id]);

  function timeConvert(n) {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + " hours " + rminutes + " minutes";
  }

  if (loading) {
    return <Spinner />;
  }

  if (!loading && !!data && error) {
    return <ErrorApi />;
  }

  return (
     <div className="outer-div">
      {!loading && !isEmptyObject(data) && (
        <>
            <div className="details-container">
          <img
            className="movie-image"
            src={"https://image.tmdb.org/t/p/w300/" + data?.poster_path}
          />
          <div className="details-box">
            <div className="title-and-rating">
              <div className="title">{data?.title}</div>
              <div className="rating">
                <StarRating rating={data?.vote_average} />
              </div>
            </div>
            <div className="genres">
              {data?.genres.map((genre, genreIndex) => (
                <>
                  <div key={genreIndex}>{genre.name}</div>
                  {genreIndex < data.genres?.length - 1 && (
                    <div className="vertical-divider"></div>
                  )}
                </>
              ))}
            </div>
            <div className="additional-details">
              <div className="duration">
                Duration - {timeConvert(data?.runtime)}
              </div>
              <div className="release-date">
                Release Date - {data?.release_date}
              </div>
            </div>
            <div className="tagline">{data?.tagline}</div>
            <div className="description">{data?.overview}</div>
          </div>
        </div>
        <Button onClick={() => navigate('/')} type="primary">Back</Button>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
