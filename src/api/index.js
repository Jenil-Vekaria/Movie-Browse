/*
    GET_MOVIE_BASE_URL: https://api.themoviedb.org/3
    POSTER_BASE_URL: https://image.tmdb.org/t/p/w500/<poster_path>

    PARAMETERS: ?api_key=dba18a1312b83aca86f1dc2139f0a473&language=en-US&page=1

    POPULAR: /movie/popular
    TO-RATED: /movie/top_rated
    UPCOMING: /movie/upcoming
    LATEST: /movie/latest

    SEARCH MOVIE: /search/movie/?api_key=<KEY>&language=en-US&query=<QUERY>&page=1&include_adult=false

*/

import axios from 'axios';

const API = axios.create({ baseURL: `https://api.themoviedb.org/3` });
const fetchFilter = "api_key=dba18a1312b83aca86f1dc2139f0a473&language=en-US";


export const fetchPopular = () => API.get(`/movie/popular?${fetchFilter}`);
export const fetchTopRated = () => API.get(`/movie/top_rated?${fetchFilter}`);
export const fetchUpcoming = () => API.get(`/movie/upcoming?${fetchFilter}`);
export const fetchLatest = () => API.get(`/movie/now_playing?${fetchFilter}`);
