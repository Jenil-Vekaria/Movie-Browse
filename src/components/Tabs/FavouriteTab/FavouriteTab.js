import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { TokenValidation } from '../../../util/TokenValidation';
import { getFavourite } from '../../../redux/actions/favourite';
import { useDispatch } from 'react-redux';
import { Auth } from '../../Auth/Auth';
import { MovieList } from '../../Movie/MovieBrowser/MovieList/MovieList';

import './styles.css';

export const FavouriteTab = () => {
    const favouriteGroup = ["Movies", "TV Shows"];
    const history = useHistory();
    const dispatch = useDispatch();
    const favouriteData = useSelector(state => state.favourite);

    const [favouriteMovies, setFavouriteMovies] = useState([]);
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [favouriteGroupIndex, setFavouriteGroupIndex] = useState(0);

    useEffect(() => {
        const isTokenValid = TokenValidation(JSON.parse(localStorage.getItem('profile')));

        if (isTokenValid)
            dispatch(getFavourite());
        else
            dispatch({ type: "LOGOUT" });

        setisLoggedIn(isTokenValid);

    }, [dispatch]);

    useEffect(() => {
        if (favouriteData.movies)
            setFavouriteMovies(favouriteData.movies);
    }, [favouriteData]);

    return (
        <div className="favourite-container">
            {
                !isLoggedIn ? <Auth /> :
                    (
                        <div className="favourite">
                            <h2>Favourite</h2>
                            {
                                favouriteGroup.map((favourite, index) => (
                                    <span
                                        className={`badge rounded-pill ${favouriteGroupIndex === index ? 'badge-selected' : null}`}
                                        key={index}
                                        onClick={() => setFavouriteGroupIndex(index)}>{favourite}</span>
                                ))
                            }
                            {
                                favouriteMovies.length >= 1 ?
                                    <MovieList movieList={favouriteMovies} history={history} />
                                    : null
                            }
                        </div>
                    )
            }
        </div>
    );
};


