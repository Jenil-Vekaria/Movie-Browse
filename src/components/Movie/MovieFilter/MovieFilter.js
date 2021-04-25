import React from 'react';
import { FiCheck } from "react-icons/fi";
import { genres } from '../../../data/Genres';
import { WindowSize } from '../../../util/WindowSize';

import './styles.css';

export const MovieFilter = ({ selectedGenre, showFilter, setShowFilter, history }) => {
    const windowWidth = WindowSize();
    const iconStyles = { color: "#F3F3F4", fontSize: "1.2em" };

    const handleSelectGenre = (e) => {
        const name = e.target.innerHTML;
        const id = e.target.value;

        if (genres[selectedGenre] !== id) {
            history.push(`/search/${name.toLowerCase().replace(' ', '_')}`);
        }
        else {
            history.push(`/search`);
        }

        //Mobile device - as soon as genere is selected => hide filer
        if (windowWidth < 750) {
            setShowFilter(false);
        }

        window.scrollTo(0, 0);
    };

    return (
        <div className={`movie-filter-container ${!showFilter ? 'hide' : null}`}>
            <h2 className="filter-title">Movies</h2>

            <div>
                <p className="section-title">GENRES</p>
                <hr />
                <ul className="generes-list">
                    {
                        Object.keys(genres).map(genre => (
                            <li className={`item ${genres[selectedGenre] === genres[genre] ? 'selected' : null}`} key={genres[genre]} value={genres[genre]} onClick={handleSelectGenre}>
                                {genre}

                                {
                                    genres[selectedGenre] === genres[genre]
                                        ? <span className="check"><FiCheck styles={iconStyles} /></span>
                                        : null
                                }

                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};
