import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://api.themoviedb.org/3/movie/"

const getLatestMovies = () => {
    return axios.get(API_URL + "upcoming", { headers: authHeader() });
  };

  export default {
    getLatestMovies
  };