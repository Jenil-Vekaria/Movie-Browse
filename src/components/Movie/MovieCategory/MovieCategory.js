import React from 'react';

export const MovieCategory = ({ selectedGenre, categoryIndex, handleCategoryChange }) => {
    const categories = ["Popular", "Top Rated", "Upcoming", "Latest"];

    return (
        <div>
            <h2 className="category-title">{categories[categoryIndex]}</h2>
            <div className="category-group">
                {
                    categories.map((category, index) => (
                        <span
                            className={`badge rounded-pill ${categoryIndex === index ? 'badge-selected' : null}`}
                            key={index}
                            onClick={() => handleCategoryChange(index)}>{category}</span>
                    ))
                }
            </div>
        </div>
    );
};
