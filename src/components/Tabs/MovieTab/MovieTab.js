import React, { useState } from 'react';
import styles from './styles.css';
import { Search } from '../../Search/Search.js';
import { MovieList } from '../../Movie/MovieList/MovieList';
import { MovieFilter } from '../../Movie/MovieFilter/MovieFilter';

export const MovieTab = () => {
    const [selectedGenre, setselectedGenre] = useState([]);

    return (
        <div className="movietab-container">
            <Search />
            <div className="movie-container">
                <MovieFilter selectedGenre={selectedGenre} setselectedGenre={setselectedGenre} />
                <MovieList selectedGenre={selectedGenre} />
            </div>
        </div>
    );
};

