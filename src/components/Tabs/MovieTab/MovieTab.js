import React from 'react';
import styles from './styles.css';
import { Search } from '../../Search/Search.js';
import { MovieList } from '../../Movie/MovieList/MovieList';
import { MovieFilter } from '../../Movie/MovieFilter/MovieFilter';

export const MovieTab = () => {
    return (
        <div className="movietab-container">
            <Search />
            <div className="movie-container">
                <MovieFilter />
                <MovieList />
            </div>
        </div>
    );
};

