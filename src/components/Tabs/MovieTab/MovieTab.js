import React, { useState, useEffect } from 'react';
import { Search } from '../../Search/Search.js';
import { MovieList } from '../../Movie/MovieList/MovieList';
import { MovieFilter } from '../../Movie/MovieFilter/MovieFilter';

import './styles.css';

export const MovieTab = ({ match, location }) => {

    const [selectedGenre, setselectedGenre] = useState({});
    const [showFilter, setShowFilter] = useState(true);
    const [queryMovieSearch, setqueryMovieSearch] = useState('');


    useEffect(() => {
        const movieName = location.search.split('=')[1];

        setqueryMovieSearch(movieName);
    }, [location]);


    return (
        <div className="movietab-container">
            <Search queryMovieSearch={queryMovieSearch} />
            <div className="movie-container">
                <MovieFilter selectedGenre={selectedGenre} showFilter={showFilter} setShowFilter={setShowFilter} setselectedGenre={setselectedGenre} />
                <MovieList selectedGenre={selectedGenre} showFilter={showFilter} setShowFilter={setShowFilter} queryMovieSearch={queryMovieSearch} />
            </div>
        </div>
    );
};

