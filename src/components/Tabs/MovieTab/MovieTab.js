import React, { useState, useEffect } from 'react';
import { Search } from '../../Search/Search.js';
import { MovieList } from '../../Movie/MovieList/MovieList';
import { MovieFilter } from '../../Movie/MovieFilter/MovieFilter';

import './styles.css';

export const MovieTab = ({ location: { search } }) => {

    const [selectedGenre, setselectedGenre] = useState({});
    const [showFilter, setShowFilter] = useState(true);
    const [queryMovieSearch, setqueryMovieSearch] = useState('');
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        console.log(search);
        const params = search.slice(1).split("=");

        const paramName = params[0];
        const paramValue = params[1];

        if (paramName === 'movieName') {
            setqueryMovieSearch(paramValue);
        }
        else if (paramName === 'page') {
            setPageNumber(paramValue);
            window.scrollTo(0, 0);
        }
        else {
            setqueryMovieSearch('');
            setPageNumber(1);
        }

    }, [search]);


    return (
        <div className="movietab-container">
            <Search queryMovieSearch={queryMovieSearch} />
            <div className="movie-container">
                <MovieFilter selectedGenre={selectedGenre} showFilter={showFilter} setShowFilter={setShowFilter} setselectedGenre={setselectedGenre} />
                <MovieList selectedGenre={selectedGenre} showFilter={showFilter} setShowFilter={setShowFilter} queryMovieSearch={queryMovieSearch} pageNumber={pageNumber} />
            </div>
        </div>
    );
};

