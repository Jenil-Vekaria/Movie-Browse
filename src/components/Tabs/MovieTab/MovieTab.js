import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Search } from '../../Search/Search.js';
import { MovieList } from '../../Movie/MovieList/MovieList';
import { MovieFilter } from '../../Movie/MovieFilter/MovieFilter';

import './styles.css';
import { MovieInfo } from '../../Movie/MovieInfo/MovieInfo.js';
import { useDispatch } from 'react-redux';
import { getPopular, getLatest, getTopRated, getUpcoming, getByGenre, getMovie, getMovieInfo } from '../../../redux/actions/movie';
import { genres } from '../../../data/Genres';


export const MovieTab = ({ location: { search } }) => {

    const [showFilter, setShowFilter] = useState(true);
    const [selectedGenre, setselectedGenre] = useState('');
    const [queryMovieSearch, setqueryMovieSearch] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    const [categoryIndex, setCategoryIndex] = useState(0);

    const history = useHistory();
    const dispatch = useDispatch();

    const { genere, movieId } = useParams();

    useEffect(() => {
        const params = search.slice(1).split("=");

        const paramName = params[0];
        const paramValue = params[1];

        if (paramName === 'page') {
            setPageNumber(paramValue);
            window.scrollTo(0, 0);
        }
        else {
            setPageNumber(1);
        }

        if (genere) {
            setselectedGenre(upperCaseWord(genere));
            dispatch(getByGenre(genres[upperCaseWord(genere)], pageNumber));
        }
        else if (paramName === 'movieName') {
            setqueryMovieSearch(paramValue);
            dispatch(getMovie(paramValue, pageNumber));
        }
        else if (movieId) {
            dispatch(getMovieInfo(movieId));
        }
        else {
            setselectedGenre('');
            setqueryMovieSearch('');

            // else {
            switch (categoryIndex) {
                case 0:
                    dispatch(getPopular(pageNumber));
                    break;
                case 1:
                    dispatch(getTopRated(pageNumber));
                    break;
                case 2:
                    dispatch(getUpcoming(pageNumber));
                    break;
                case 3:
                    dispatch(getLatest(pageNumber));
                    break;
                default:
                    dispatch(getPopular(pageNumber));
                    break;
            }
        }

    }, [search, pageNumber, history, genere, movieId, categoryIndex, dispatch]);

    const upperCaseWord = (str) => {
        let words = str.split("_");

        return words.map((word) => {
            if (word === 'tv')
                return word.toUpperCase();
            else
                return word[0].toUpperCase() + word.substring(1);
        }).join(" ");
    };

    return (
        <div className="movietab-container">

            {
                movieId !== undefined ? <MovieInfo />
                    : (
                        <>
                            <Search queryMovieSearch={queryMovieSearch} />
                            <div className="movie-container">
                                <MovieFilter selectedGenre={selectedGenre} showFilter={showFilter} setShowFilter={setShowFilter} history={history} />
                                <MovieList categoryIndex={categoryIndex} setCategoryIndex={setCategoryIndex} selectedGenre={selectedGenre} showFilter={showFilter} setShowFilter={setShowFilter} queryMovieSearch={queryMovieSearch} pageNumber={pageNumber} history={history} />
                            </div>
                        </>
                    )
            }

        </div>
    );
};

