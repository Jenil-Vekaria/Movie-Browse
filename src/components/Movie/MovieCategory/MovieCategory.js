import React from 'react';
import { FiFilter } from "react-icons/fi";

export const MovieCategory = ({ selectedGenre, categoryIndex, handleCategoryChange, setShowFilter, totalResult, queryMovieSearch }) => {
    const categories = ["Popular", "Top Rated", "Upcoming", "Latest"];

    let iconStyles = { color: "#F3F3F4", fontSize: "1.5em" };

    const handleShowFilter = () => {
        setShowFilter(prevShowFilter => !prevShowFilter);
    };

    const getTitle = () => {
        if (queryMovieSearch) {
            return (<h2 className="header-title">Search for <span className="highlight-yellow">{queryMovieSearch}</span></h2>);
        }
        else if (typeof selectedGenre.id !== "undefined") {
            return (<p className="total-movies ">Result: <span className="highlight-yellow">{totalResult} MOVIES</span></p>);
        }
        else {
            return (<h2 className="header-title">{categories[categoryIndex]}</h2>);
        }
    };

    return (
        <div>
            <div className="movie-category-header">
                {
                    getTitle()
                }

                <button className="btn-filter" onClick={handleShowFilter}><FiFilter style={iconStyles} /></button>
            </div>

            {
                !queryMovieSearch && (
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
                )
            }

        </div >
    );
};
