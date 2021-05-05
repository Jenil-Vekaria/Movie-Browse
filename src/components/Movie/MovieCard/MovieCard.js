import React from 'react';
import './styles.css';
import posterPlaceholder from '../../../images/posterPlaceholder.png';

export const MovieCard = ({ movie: { id, title, poster_path, release_date }, history }) => {

    const handleMovieClick = () => {
        history.push(`/search/movie/${id}`);
    };

    const posterPath = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : posterPlaceholder;
    return (
        <div className="movie-card col-xs-12" >
            <img
                className="movie-poster card-img-top"
                src={posterPath}
                data-src={posterPlaceholder}
                loading="lazy"
                alt={title}
                onClick={handleMovieClick}
            />

            <h6 className="movie-title">{title}</h6>
            {
                release_date
                    ? (<p className="movie-year">{release_date.split('-')[0]}</p>)
                    : null
            }
        </div>
    );
};
