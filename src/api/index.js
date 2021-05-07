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

export const fetchPopular = (page) => API.get(`/movie/popular?${requestParams}&page=${page}`);
export const fetchTopRated = (page) => API.get(`/movie/top_rated?${requestParams}&page=${page}`);
export const fetchUpcoming = (page) => API.get(`/movie/upcoming?${requestParams}&page=${page}`);
export const fetchLatest = (page) => API.get(`/movie/now_playing?${requestParams}&page=${page}`);
export const fetchByGenre = (id, page) => API.get(`/discover/movie?${requestParams}&${paramSortby}&${paramReleaseYear}&with_genres=${id}&page=${page}`);
export const fetchMovie = (name, page) => API.get(`/search/movie?${requestParams}&query=${name}&page=${page}`);
export const fetchMovieInfo = (id) => API.get(`/movie/${id}?${requestParams}`);
export const fetchMovieCredit = (id) => API.get(`/movie/${id}/credits?${requestParams}`);
export const fetchMovieImages = (id) => API.get(`/movie/${id}/images?${paramAPIKey}`);
export const fetchMovieTrailer = (id) => API.get(`/movie/${id}/videos?${requestParams}`);