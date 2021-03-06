import React, { useEffect, useState } from 'react';
import { FiClock, FiPlay, FiHeart } from "react-icons/fi";
import { FaImdb } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import posterPlaceholder from '../../../images/posterPlaceholder.png';
import { TokenValidation } from '../../../util/TokenValidation';
import MovieCredit from './MovieCredit/MovieCredit';
import { MovieImages } from './MovieImages/MovieImages';
import { SimilarMovies } from './SimilarMovies/SimilarMovies';
import { favouriteMovie } from '../../../redux/actions/favourite';
import './styles.css';

export const MovieInfo = ({ history }) => {
    const [movieTrailer, setMovieTrailer] = useState('');
    const [isFavourite, setIsFavourite] = useState(false);
    const [showSignInMessage, setShowSignInMessage] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const icontStyle = { color: "white", fontSize: "2rem" };

    const dispatch = useDispatch();
    const movie = useSelector((state) => state.movie[0]) || {};
    const similarMovie = useSelector((state) => state.movie[4]);
    const trailer = useSelector((state) => state.movie[3]);
    const backdrops = useSelector((state) => state.movie[2]);
    const movieCredit = useSelector((state) => state.movie[1]);
    const userFavouriteData = useSelector(state => state.favourite.movieIds);

    const backdropURL = movie.backdrop_path ? `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}` : 'https://wallpaperaccess.com/full/1561985.jpg';
    const posterURL = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : posterPlaceholder;
    const backdropStyle = {
        background: ` linear-gradient(
                            to top,rgb(24, 33, 48),
                            rgba(24, 33, 48, 0.7) 83%,
                            rgba(24, 33, 48, 0.5)), 
                            url(${backdropURL})`
    };

    useEffect(() => {
        setShowSignInMessage(false);
        setShowDialog(false);
    }, [history.location]);

    useEffect(() => {
        if (userFavouriteData?.length > 0)
            setIsFavourite(userFavouriteData.includes(movie.id + ""));
    }, [userFavouriteData, movie.id]);

    useEffect(() => {
        if (trailer && trailer.length) {
            const filteredTrailer = trailer.find(video => video.type === 'Trailer');

            if (filteredTrailer)
                setMovieTrailer(`https://www.youtube.com/watch?v=${filteredTrailer.key}`);
        }

    }, [trailer]);

    const handleFavourite = () => {
        const isTokenValid = TokenValidation(JSON.parse(localStorage.getItem('profile')));

        if (isTokenValid) {
            const movieData = {
                title: movie.original_title,
                poster_path: movie.poster_path,
                id: movie.id,
                release_date: movie.release_date
            };
            setIsFavourite(prevIsFavourite => !prevIsFavourite);
            setShowDialog(true);
            dispatch(favouriteMovie(movie.id, movieData));
        }
        else {
            setShowDialog(false);
            setShowSignInMessage(true);
        }
    };

    const getLoading = () => {
        return (
            <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    };

    return (
        movie.original_title ?
            (
                <div className="view-movie-container">
                    <div className="backdrop" style={backdropStyle}>
                        <div>
                            <a href={`${movieTrailer}`} target="_blank" rel="noreferrer noopener" className={`watch-trailer ${!movieTrailer ? 'disabled' : ''}`}>
                                <FiPlay style={icontStyle} />
                                <h3>{movieTrailer ? 'Watch Trailer' : 'No Trailer Available'}</h3>
                            </a>
                        </div>
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

                            <button type="button" className={`favourite-btn btn btn-${isFavourite ? 'danger' : 'success'}`} onClick={handleFavourite}><FiHeart style={{ marginRight: 10 }} />{isFavourite ? 'Unfavourite' : 'Favourite'}</button>
                        </div>
                    </div>
                    {backdrops.length ? <MovieImages backdrops={backdrops} /> : null}
                    {movieCredit.length ? <MovieCredit movieCredit={movieCredit} /> : null}
                    {similarMovie.length ? <SimilarMovies movieList={similarMovie} history={history} /> : null}

                    {
                        showDialog ?
                            (
                                <div className={`movie-info-alert alert alert-${isFavourite ? 'warning' : 'danger'} alert-dismissible fade show`} role="alert" >
                                    <strong>{isFavourite ? 'Added to' : 'Removed from'} favourite</strong> {movie.original_title}<br></br>
                                    <button type="button" className="btn-close" onClick={() => setShowDialog(false)}></button>
                                </div>
                            ) : null
                    }

                    {
                        showSignInMessage ?
                            (
                                <div className={`movie-info-alert alert alert-danger alert-dismissible fade show`} role="alert">
                                    <strong>Please Sign In!</strong> To favourite movies
                                    <button type="button" className="btn-close" onClick={() => setShowSignInMessage(false)}></button>
                                </div>
                            ) : null
                    }
                </div >
            )
            : getLoading()
    );
};
