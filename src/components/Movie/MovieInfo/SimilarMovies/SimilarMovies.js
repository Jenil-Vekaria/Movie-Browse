import React from 'react';
import { MovieList } from '../../MovieBrowser/MovieList/MovieList';

export const SimilarMovies = ({ movieList, history }) => {
    return (
        <div className="section">
            <div className="d-flex" style={{ width: "100%" }}>
                <h1 className="header-title">Similar Movies</h1>
            </div>
            <br />
            <MovieList movieList={movieList} history={history} />
        </div>
    );
};
