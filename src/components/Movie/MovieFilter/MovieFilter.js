import React from 'react';
import { FiCheck } from "react-icons/fi";
import styles from './styles.css';
import { genres } from '../../../data/Genres';

export const MovieFilter = ({ selectedGenre, setselectedGenre, setShowFilter }) => {

    let iconStyles = { color: "#F3F3F4", fontSize: "1.2em" };

    const handleSelectGenre = (e) => {
        const name = e.target.innerHTML;
        const id = e.target.value;

        if (selectedGenre.id !== id)
            setselectedGenre({ id, name });
    };

    return (
        <div className="movie-filter-container">
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

            <div className="filter-apply-container">
                <button type="button" className="btn btn-danger" onClick={() => setselectedGenre({})}>Reset</button>
            </div>

        </div>
    );
};
