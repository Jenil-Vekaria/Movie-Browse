import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Search } from '../../Search/Search.js';
import { MovieBrowser } from '../../Movie/MovieBrowser/MovieBrowser';
import { MovieFilter } from '../../Movie/MovieFilter/MovieFilter';
import { MovieInfo } from '../../Movie/MovieInfo/MovieInfo.js';
import { useDispatch } from 'react-redux';
import {
    getPopular,
    getLatest,
    getTopRated,
    getUpcoming,
    getByGenre,
    getMovie,
    getMovieInfo
} from '../../../redux/actions/movie';

import { genres } from '../../../data/Genres';
import './styles.css';

export const MovieTab = ({ location: { search } }) => {

    const [showFilter, setShowFilter] = useState(true);
    const [selectedGenre, setselectedGenre] = useState('');
    const [queryMovieSearch, setqueryMovieSearch] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    const [categoryIndex, setCategoryIndex] = useState(0);

    const history = useHistory();
    const dispatch = useDispatch();

    const { genere, movieId } = useParams();
    //movieName=star%20wars&page=2
    useEffect(() => {

        //Reset Value
        setqueryMovieSearch('');
        setPageNumber(1);
        setselectedGenre('');

        const fields = search.slice(1).split("&");

        let fieldValueMapping = {};

        fields.forEach(field => {
            if (field) {
                let [fieldName, fieldValue] = field.split('=');

                fieldValueMapping[fieldName] = fieldValue;
            }
        });

        if (fieldValueMapping.page) {
            setPageNumber(parseInt(fieldValueMapping.page));
            window.scrollTo(0, 0);
        }

        if (genere) {
            console.log('fetch');
            setselectedGenre(upperCaseWord(genere));
            dispatch(getByGenre(genres[upperCaseWord(genere)], pageNumber));
        }
        else if (fieldValueMapping.movieName) {
            let movieSearch = fieldValueMapping.movieName.replaceAll('%20', '_');

            setqueryMovieSearch(upperCaseWord(movieSearch));
            dispatch(getMovie(fieldValueMapping.movieName, pageNumber));
        }
        else if (movieId) {
            dispatch(getMovieInfo(movieId));
            // dispatch(getMovieCredit(movieId));
            // dispatch(getMovieImages(movieId));
        }
        else {
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
                                <MovieBrowser categoryIndex={categoryIndex} setCategoryIndex={setCategoryIndex} selectedGenre={selectedGenre} showFilter={showFilter} setShowFilter={setShowFilter} queryMovieSearch={queryMovieSearch} pageNumber={pageNumber} history={history} />
                            </div>
                        </>
                    )
            }

        </div>
    );
};

