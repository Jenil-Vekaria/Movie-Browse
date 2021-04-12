import React, { useState, useEffect } from 'react';
import { MovieCard } from '../MovieCard/MovieCard';
import styles from './styles.css';
import { fetchPopular, fetchTopRated, fetchLatest, fetchUpcoming } from '../../../api';

export const MovieList = () => {

    const [categoryIndex, setCategoryIndex] = useState(0);
    const categories = ["Popular", "Top Rated", "Upcoming", "Latest"];
    const [movies, setmovies] = useState([]);

    useEffect(() => {
        let movies;

        if (categoryIndex === 0)
            movies = fetchPopular();
        else if (categoryIndex === 1)
            movies = fetchTopRated();
        else if (categoryIndex === 2)
            movies = fetchUpcoming();
        else
            movies = fetchLatest();

        movies.then((data) => {
            setmovies(data);
        });

    }, [categoryIndex]);


    const handleCategoryChange = (index) => {
        if (index !== categoryIndex)
            setCategoryIndex(index);
    };

    return (
        <div className="movies-container">
            <h2 className="category-title">{categories[categoryIndex]}</h2>
            <div className="category-group">
                {
                    categories.map((category, index) => (
                        <span
                            className={`badge rounded-pill ${categoryIndex === index ? 'selected' : 'primary'}`}
                            key={index}
                            onClick={() => handleCategoryChange(index)}>{category}</span>
                    ))
                }
            </div>

            <br />
            <div className="row">
                {
                    movies.map(movie => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))
                }
            </div>
        </div>
    );
};
