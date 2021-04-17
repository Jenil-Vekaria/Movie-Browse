import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MovieCard } from '../MovieCard/MovieCard';
import { MovieCategory } from '../MovieCategory/MovieCategory';
import { useDispatch } from 'react-redux';
import { getPopular, getLatest, getTopRated, getUpcoming } from '../../../redux/actions/movie';


import styles from './styles.css';

export const MovieList = ({ selectedGenre }) => {
    const [categoryIndex, setCategoryIndex] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        switch (categoryIndex) {
            case 0:
                dispatch(getPopular());
                break;
            case 1:
                dispatch(getTopRated());
                break;
            case 2:
                dispatch(getUpcoming());
                break;
            case 3:
                dispatch(getLatest());
                break;
            default:
                dispatch(getPopular());
                break;
        }
    }, [categoryIndex, dispatch]);

    const handleCategoryChange = (index) => {
        if (index !== categoryIndex) {
            setCategoryIndex(index);
        }
    };


    const movies = useSelector((state) => state.movie[0]) || [];

    return (
        <div className="movies-container">
            <MovieCategory selectedGenre={selectedGenre} categoryIndex={categoryIndex} handleCategoryChange={handleCategoryChange} />

            <br />
            {
                movies.length === 0
                    ?
                    (
                        <div className="spinner-border text-light" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    )
                    :
                    (
                        <div className="row">
                            {
                                movies.map(movie => (
                                    <MovieCard movie={movie} key={movie.id} />
                                ))
                            }
                        </div>
                    )
            }
        </div>
    );
};
