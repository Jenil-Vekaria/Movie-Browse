import React, { useState, useEffect } from 'react';
import styles from './styles.css';
import { Search } from '../../Search/Search.js';
import { MovieList } from '../../Movie/MovieList/MovieList';
import { MovieFilter } from '../../Movie/MovieFilter/MovieFilter';
import { WindowSize } from '../../../util/WindowSize';

export const MovieTab = ({ match }) => {
    const { windowWidth, windowHeight } = WindowSize();
    const [selectedGenre, setselectedGenre] = useState({});
    const [showFilter, setShowFilter] = useState(true);

    useEffect(() => {
        setShowFilter(windowWidth > 750);
    }, []);


    return (
        <div className="movietab-container">
            <Search />
            <div className="movie-container">
                {
                    showFilter ?
                        (
                            <MovieFilter selectedGenre={selectedGenre} setShowFilter={setShowFilter} setselectedGenre={setselectedGenre} />
                        ) : null
                }
                <MovieList selectedGenre={selectedGenre} showFilter={showFilter} setShowFilter={setShowFilter} />
            </div>
        </div>
    );
};

