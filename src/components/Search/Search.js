import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { TokenValidation } from '../../util/TokenValidation.js';
import './styles.css';

export const Search = () => {
    const [movieSearch, setmovieSearch] = useState('');
    const [userProfile, setUserProfile] = useState(JSON.parse(localStorage.getItem('profile')));
    const history = useHistory();

    useEffect(() => {
        const isTokenValid = TokenValidation(JSON.parse(localStorage.getItem('profile')));

        if (isTokenValid)
            setUserProfile(JSON.parse(localStorage.getItem('profile')));

    }, []);

    const handleSearch = (e) => {
        e.preventDefault();

        if (movieSearch)
            history.push(`/search?movieName=${movieSearch}&page=1`);
        else
            history.push(`/search`);

    };

    const handleMovieSearch = (e) => {
        const search = e.target.value;

        if (search)
            setmovieSearch(search);
        else {
            setmovieSearch('');
            history.push('/search');
        }

    };
    return (
        <div className="movie-search-form">
            <form className="form" autoComplete="off" noValidate onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search movies"
                    className="movie-search-bar"
                    value={movieSearch}
                    onChange={handleMovieSearch} />
            </form>
            <div className="user-container">
                {
                    userProfile ?
                        (
                            <div className="profile-image" onClick={() => history.push('/user')}>
                                {userProfile.result.username.charAt(0)}
                            </div>
                        ) :
                        (
                            <button type="button" className="sign-in btn btn-primary btn-md" onClick={() => history.push('/user')}>Sign in</button>
                        )
                }
            </div>
        </div>
    );
};

