import React from 'react';
import { FiFilter } from "react-icons/fi";
import { genres } from '../../../data/Genres';

export const MovieCategory = ({ selectedGenre, categoryIndex, handleCategoryChange, setShowFilter, totalResult }) => {
    const categories = ["Popular", "Top Rated", "Upcoming", "Latest"];
    let iconStyles = { color: "#F3F3F4", fontSize: "1.5em" };

    const handleShowFilter = () => {
        setShowFilter(prevShowFilter => !prevShowFilter);
    };

    return (
        <div>
            <div className="movie-category-header">
                {
                    typeof selectedGenre.id !== "undefined"
                        ? (<p className="total-movies">{totalResult} MOVIES</p>)
                        : (<h2 className="category-title">{categories[categoryIndex]}</h2>)
                }

                <button className="btn-filter" onClick={handleShowFilter}><FiFilter style={iconStyles} /></button>
            </div>

            <div className="category-group">
                {
                    typeof selectedGenre.id !== "undefined"
                        ? (
                            <span className='badge rounded-pill'>{selectedGenre.name}</span>

                        )
                        :
                        categories.map((category, index) => (
                            <span
                                className={`badge rounded-pill ${categoryIndex === index ? 'badge-selected' : null}`}
                                key={index}
                                onClick={() => handleCategoryChange(index)}>{category}</span>
                        ))
                }
            </div>
        </div >
    );
};
