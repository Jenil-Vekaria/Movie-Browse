import React, { useState } from 'react';

export const MovieCategory = ({ categoryIndex, handleCategoryChange }) => {
    const categories = ["Popular", "Top Rated", "Upcoming", "Latest"];

    return (
        <>
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
        </>
    );
};
