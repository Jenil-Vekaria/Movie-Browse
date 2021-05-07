import React from 'react';
import { WindowSize } from '../../../../util/WindowSize';
import { MovieCard } from '../../MovieCard/MovieCard';

const MovieList = ({ movieList, history }) => {

    const windowWidth = WindowSize();

    //Responsive design: Breakpoint for moveicard
    const getBreakpointClass = () => {
        if (windowWidth <= 540)
            return 'row-cols-2';
        else if (windowWidth <= 900)
            return 'row-cols-3';
        else if (windowWidth <= 960)
            return 'row-cols-4';
        else
            return 'row-cols-5';
    };

    const movieCardClass = getBreakpointClass();
    return (
        <div className={`row ${movieCardClass}`}>
            {
                movieList.map(movie => (
                    <MovieCard movie={movie} key={movie.id} history={history} />
                ))
            }
        </div>
    );
};

export default MovieList;
