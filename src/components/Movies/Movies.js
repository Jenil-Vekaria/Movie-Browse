import React, { useState, useEffect } from 'react';
import { Movie } from './Movie/Movie';
import styles from './styles.css';
import { fetchPopular, fetchTopRated, fetchLatest, fetchUpcoming } from '../../api';

export const Movies = () => {
    const [categoryIndex, setCategoryIndex] = useState(0);
    const categories = ["Popular", "Top Rated", "Upcoming", "Latest"];
    const [movies, setmovies] = useState([]);

    useEffect(() => {
        let results;

        if (categoryIndex === 0)
            results = fetchPopular();
        else if (categoryIndex === 1)
            results = fetchTopRated();
        else if (categoryIndex === 2)
            results = fetchUpcoming();
        else
            results = fetchLatest();

        results.then(({ results }) => {
            setmovies(results);
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
            <div className="row row-cols-6">
                {
                    movies.map(movie => (
                        <Movie movie={movie} key={movie.id} />
                    ))
                }
            </div>
        </div>
    );
};
