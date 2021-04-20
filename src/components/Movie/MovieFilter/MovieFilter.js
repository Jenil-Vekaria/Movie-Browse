import React from 'react';
import { FiCheck } from "react-icons/fi";
import { genres } from '../../../data/Genres';
import { WindowSize } from '../../../util/WindowSize';

import './styles.css';

export const MovieFilter = ({ selectedGenre, setselectedGenre, showFilter, setShowFilter }) => {
    const windowWidth = WindowSize();
    const iconStyles = { color: "#F3F3F4", fontSize: "1.2em" };

    const handleSelectGenre = (e) => {
        const name = e.target.innerHTML;
        const id = e.target.value;

        if (selectedGenre.id !== id) {
            setselectedGenre({ id, name });
        }
        else {
            setselectedGenre({});
        }

        //Mobile device - as soon as genere is selected => hide filer
        if (windowWidth < 750) {
            setShowFilter(false);
        }

        window.scrollTo(0, 0);
    };

    return (
        <div className={`movie-filter-container ${!showFilter ? 'hide' : null}`}>
            <h2 className="title">Movies</h2>

            <div>
                <p className="section-title">GENRES</p>
                <hr />
                <ul className="generes-list">
                    {
                        genres.map(genre => (
                            <li className={`item ${selectedGenre.id === genre.id ? 'selected' : null}`} key={genre.id} value={genre.id} onClick={handleSelectGenre}>
                                {genre.name}

                                {
                                    selectedGenre.id === genre.id
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
