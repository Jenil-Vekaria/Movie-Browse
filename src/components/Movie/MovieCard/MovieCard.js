import React from 'react';
import styles from './styles.css';
import { FiHeart } from "react-icons/fi";
import posterPlaceholder from '../../../images/posterPlaceholder.png';

export const MovieCard = ({ movie: { title, poster_path, release_date } }) => {
    // col-lg-2 col-sm-12 col-md-6
    const posterPath = poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : null;
    return (
        <div className="movie-card col-xs-12" >
            <img src={posterPath || posterPlaceholder} data-src={posterPlaceholder} loading="lazy" className="animate__fadeIn movie-poster card-img-top" alt="..." />
            <h6 className="movie-title">{title}</h6>
            {
                release_date
                    ? (<p className="movie-year">{release_date.split('-')[0]}</p>)
                    : null
            }
        </div>
    );
};
