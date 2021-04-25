import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MovieCard } from '../MovieCard/MovieCard';
import { MovieCategory } from '../MovieCategory/MovieCategory';
import { WindowSize } from '../../../util/WindowSize';

import './styles.css';
import { Pagination } from '../../Pagination/Pagination';

export const MovieList = ({ categoryIndex, setCategoryIndex, selectedGenre, showFilter, setShowFilter, queryMovieSearch, pageNumber, history }) => {
    const [movieList, setmovieList] = useState([]);

    const windowWidth = WindowSize();
    const movies = useSelector((state) => state.movie[0]);
    const total_result = useSelector((state) => state.movie[1]) || 0;
    const total_page = useSelector((state) => state.movie[2]) || 0;

    useEffect(() => {
        if (movies)
            setmovieList(movies);
    }, [movies]);

    // This is to stop scroll for mvoie when filter box is open
    const style = {
        position: "fixed"
    };

    //Responsive design: Breakpoint for moveicard
    const getBreakpointClass = () => {
        if (windowWidth <= 540)
            return 'row-cols-1';
        else if (windowWidth <= 900)
            return 'row-cols-2';
        else if (windowWidth <= 960)
            return 'row-cols-4';
        else
            return 'row-cols-5';
    };

    const movieCardClass = getBreakpointClass();
    console.log(movies);
    return (
        <div className="movies-container" style={windowWidth < 750 && showFilter ? style : null}>
            <MovieCategory
                selectedGenre={selectedGenre}
                categoryIndex={categoryIndex}
                setCategoryIndex={setCategoryIndex}
                setShowFilter={setShowFilter}
                totalResult={total_result}
                queryMovieSearch={queryMovieSearch}
                history={history} />

            <br />
            {
                movieList.length > 0
                    ?
                    (
                        <div className={`row ${movieCardClass}`}>
                            {
                                movieList.map(movie => (
                                    <MovieCard movie={movie} key={movie.id} history={history} />
                                ))
                            }
                        </div>
                    )
                    :
                    (
                        <div className="spinner-border text-light" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    )
            }

            <Pagination totalPage={total_page} pageNumber={pageNumber} history={history} />
        </div>
    );
};
