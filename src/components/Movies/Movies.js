import React, { useState } from 'react';
import { Movie } from './Movie/Movie';
import styles from './styles.css';

export const Movies = () => {
    const [categoryIndex, setCategoryIndex] = useState(0);
    const categories = ["Popular", "Top Rated", "Upcoming", "Latest"];
    const handleCategoryChange = (index) => {
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
                            onClick={() => handleCategoryChange(index)}>{category}</span>
                    ))
                }
            </div>

            <br />
            <div class="row row-cols-6">
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
            </div>
        </div>
    );
};
