import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import userService from "../../../services/user.service";
import { Spinner } from "../../common/spinner";
import { isEmptyObject } from "../../common/utils/utils";
import { StarRating } from "../list/@component";
import "./movie-details.scss";

const MovieDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    userService.getMovieDetails({ id }).then(
      // setLoading(true),
      (response) => {
        setLoading(false);
        setData(response.data);
      },
      (error) => {
        console.log("error");
      }
    );
  }, [id]);

  function timeConvert(n) {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return (
      rhours + " hours " + rminutes + " minutes"
    );
  }

  return (
    <>
      {loading && <Spinner />}
      {!loading && !isEmptyObject(data) && (
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
            <div className="">
              <div>{timeConvert(data?.runtime)}</div>
            </div>
            <div className="description">{data?.overview}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
