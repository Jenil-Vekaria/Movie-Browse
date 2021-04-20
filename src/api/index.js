/*
    GET_MOVIE_BASE_URL: https://api.themoviedb.org/3
    POSTER_BASE_URL: https://image.tmdb.org/t/p/w500/<poster_path>

    PARAMETERS: ?api_key=dba18a1312b83aca86f1dc2139f0a473&language=en-US&page=1

    POPULAR: /movie/popular
    TO-RATED: /movie/top_rated
    UPCOMING: /movie/upcoming
    LATEST: /movie/latest

    SEARCH MOVIE: /search/movie/?api_key=<KEY>&language=en-US&query=<QUERY>&page=1&include_adult=false
    SEARCH BY GENRE: /discover/movie?api_key=<KEY>&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_genres=28&with_watch_monetization_types=flatrate

*/

import axios from 'axios';

const API = axios.create({ baseURL: `https://api.themoviedb.org/3` });
const paramAPIKey = "api_key=dba18a1312b83aca86f1dc2139f0a473";
const paramLanguage = "language=en-US";
const paramReleaseYear = "release_date.gte=2016-01-01&release_date.lte=2024-01-01";
const paramSortby = "sort_by=vote_count.desc";

const requestParams = `${paramAPIKey}&${paramLanguage}`;

export const fetchPopular = () => API.get(`/movie/popular?${requestParams}`);
export const fetchTopRated = () => API.get(`/movie/top_rated?${requestParams}`);
export const fetchUpcoming = () => API.get(`/movie/upcoming?${requestParams}`);
export const fetchLatest = () => API.get(`/movie/now_playing?${requestParams}`);
export const fetchByGenre = (id) => API.get(`/discover/movie?${requestParams}&${paramSortby}&${paramReleaseYear}&with_genres=${id}`);
export const fetchMovie = (name) => API.get(`/search/movie?${requestParams}&query=${name}`);