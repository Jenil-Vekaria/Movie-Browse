import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './styles.css';

export const Search = () => {
    const [movieSearch, setmovieSearch] = useState('');
    const history = useHistory();

    const handleSearch = (e) => {
        e.preventDefault();

        if (movieSearch)
            history.push(`/search?movieName=${movieSearch}`);
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
        <form className="movie-search-form" autoComplete="off" noValidate onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search movies"
                className="movie-search-bar"
                value={movieSearch}
                onChange={handleMovieSearch} />
        </form>
    );
};

