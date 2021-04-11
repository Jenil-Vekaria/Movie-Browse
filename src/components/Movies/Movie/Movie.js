import React from 'react';
import styles from './styles.css';
import { FiHeart } from "react-icons/fi";
export const Movie = ({ movie: { title, poster_path, release_date } }) => {
    return (
        <div className="movie-card col-12 col-lg-2 col-sm-6 col-md-3" >
            <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} className="animate__fadeIn movie-poster card-img-top" alt="..." />
            <h6 className="movie-title">{title}</h6>
            <p className="movie-year">{release_date.split('-')[0]}</p>
            <FiHeart />
        </div>
    );
};
