import React from 'react';
import { FiClock, FiPlay, FiHeart } from "react-icons/fi";
import { FaImdb } from "react-icons/fa";
import posterPlaceholder from '../../../images/posterPlaceholder.png';
import { useSelector } from 'react-redux';

import './styles.css';

export const MovieInfo = () => {
    const icontStyle = { color: "white", fontSize: "2rem" };
    const movie = useSelector((state) => state.movie[0]) || {};


    const backdropURL = movie.backdrop_path ? `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}` : 'https://wallpaperaccess.com/full/1561985.jpg';
    const posterURL = movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : posterPlaceholder;
    const backdropStyle = {
        background: ` linear-gradient(
                            to top,rgb(24, 33, 48),
                            rgba(24, 33, 48, 0.7) 83%,
                            rgba(24, 33, 48, 0.5)), 
                            url(${backdropURL})`
    };

    console.log(movie);
    return (
        movie.original_title ?
            (

                <div className="view-movie-container">
                    <div className="backdrop" style={backdropStyle}>
                        <FiPlay style={icontStyle} />
                        <h3>Watch Trailer</h3>
                    </div>
                    <div className="movie-info-display row row-cols-1 row-cols-lg-2">
                        <img className="poster col-xl-3 col-lg-4 col-md-4 col-sm-6" src={posterURL} alt="movie_poster" />
                        <div className="movie-info col-lg-6">
                            <div>
                                <h5 className="year">{movie.release_date.split('-')[0]}</h5>

                                <h1 className="title">{movie.original_title}</h1>
                                <p className="letter-spacing fst-italic fw-lighter">{movie.tagline}</p>
                                <div className="genres letter-spacing fw-lighter">
                                    {
                                        movie.genres.map((genere, index) => (
                                            <p key={index}>
                                                {genere.name}
                                                {index < movie.genres.length - 1 ? (<span className="bullet">&bull;</span>) : null}

                                            </p>

                                        ))
                                    }
                                </div>
                            </div>

                            <p className="overview letter-spacing">{movie.overview}</p>
                            <div className="flex">
                                <div className="runtime">
                                    <FiClock style={icontStyle} />
                                    <span>{movie.runtime} min.</span>
                                </div>
                                <div className="imdb-rating">
                                    <FaImdb style={icontStyle} />
                                    <span>{movie.vote_average}/10</span>
                                </div>
                            </div>

                            <button type="button" className="btn btn-success"><FiHeart /> Favourite</button>
                        </div>
                    </div>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div >
            )
            :
            (
                <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )
    );
};
