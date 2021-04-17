import React from 'react';
import { FiCheck } from "react-icons/fi";
import styles from './styles.css';
import { genres } from '../../../data/Genres';

export const MovieFilter = ({ selectedGenre, setselectedGenre }) => {

    let iconStyles = { color: "#F3F3F4", fontSize: "1.2em" };

    const handleSelectGenre = (e) => {
        const genreId = e.target.value;
        if (selectedGenre.includes(genreId)) {
            setselectedGenre(
                selectedGenre.filter(genre => genre !== genreId)
            );
        }
        else {
            setselectedGenre([...selectedGenre, genreId]);
        }
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
                            <li className={`item ${selectedGenre.includes(genre.id) ? 'selected' : null}`} key={genre.id} value={genre.id} onClick={handleSelectGenre}>
                                {genre.name}

                                {
                                    selectedGenre.includes(genre.id)
                                        ? <span className="check"><FiCheck styles={iconStyles} /></span>
                                        : null
                                }

                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="filter-apply-container">
                <button type="button" class="btn btn-save">Save</button>
                <button type="button" class="btn btn-danger">Reset</button>
            </div>

        </div>
    );
};
