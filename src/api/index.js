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

const MOVIEAPI = axios.create({ baseURL: `https://api.themoviedb.org/3` });
const API = axios.create({ baseURL: "http://localhost:4000" });

API.interceptors.request.use((req) => {
    const userProfile = localStorage.getItem('profile');

    if (userProfile)
        req.headers.Authorization = `Bearer ${JSON.parse(userProfile).token}`;

    return req;
});

const paramAPIKey = `api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`;
const paramLanguage = "language=en-US";
const paramReleaseYear = "release_date.gte=2016-01-01&release_date.lte=2024-01-01";
const paramSortby = "sort_by=vote_count.desc";

const requestParams = `${paramAPIKey}&${paramLanguage}`;

export const fetchPopular = (page) => MOVIEAPI.get(`/movie/popular?${requestParams}&page=${page}`);
export const fetchTopRated = (page) => MOVIEAPI.get(`/movie/top_rated?${requestParams}&page=${page}`);
export const fetchUpcoming = (page) => MOVIEAPI.get(`/movie/upcoming?${requestParams}&page=${page}`);
export const fetchLatest = (page) => MOVIEAPI.get(`/movie/now_playing?${requestParams}&page=${page}`);
export const fetchByGenre = (id, page) => MOVIEAPI.get(`/discover/movie?${requestParams}&${paramSortby}&${paramReleaseYear}&with_genres=${id}&page=${page}`);
export const fetchMovie = (name, page) => MOVIEAPI.get(`/search/movie?${requestParams}&query=${name}&page=${page}`);
export const fetchMovieInfo = (id) => MOVIEAPI.get(`/movie/${id}?${requestParams}`);
export const fetchMovieCredit = (id) => MOVIEAPI.get(`/movie/${id}/credits?${requestParams}`);
export const fetchMovieImages = (id) => MOVIEAPI.get(`/movie/${id}/images?${paramAPIKey}`);
export const fetchMovieTrailer = (id) => MOVIEAPI.get(`/movie/${id}/videos?${requestParams}`);
export const fetchSimilarMovies = (id) => MOVIEAPI.get(`/movie/${id}/similar?${requestParams}&page=1`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

export const fetchFavourite = () => API.get('/movie/favourite');
export const favouriteMovie = (id) => API.patch(`/movie/${id}/favourite`);
export const createMovie = (data) => API.post(`/movie`, data);