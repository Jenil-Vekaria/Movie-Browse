import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MovieCategory } from '../MovieCategory/MovieCategory';
import { WindowSize } from '../../../util/WindowSize';

import './styles.css';
import { Pagination } from '../../Pagination/Pagination';
import { MovieList } from './MovieList/MovieList';

export const MovieBrowser = ({ categoryIndex, setCategoryIndex, selectedGenre, showFilter, setShowFilter, queryMovieSearch, pageNumber, history }) => {
    const [movieList, setmovieList] = useState([]);
    const [totalResult, setTotalResult] = useState(0);
    const [totalPage, setTotalPage] = useState(0);

    const windowWidth = WindowSize();
    const movies = useSelector((state) => state.movie[0]);
    const total_result = useSelector((state) => state.movie[1]);
    const total_page = useSelector((state) => state.movie[2]);

    useEffect(() => {
        if (movies && movies.length > 0) {
            setmovieList(movies);
            console.log(movies);
        }

        if (typeof total_result === "number")
            setTotalResult(total_result);

        if (typeof total_page === "number")
            setTotalPage(total_page);


    }, [movies, total_result, total_page]);




    return (
        <div className="movies-container" style={windowWidth < 750 && showFilter ? { position: "fixed" } : null}>
            <MovieCategory
                selectedGenre={selectedGenre}
                categoryIndex={categoryIndex}
                setCategoryIndex={setCategoryIndex}
                setShowFilter={setShowFilter}
                totalResult={totalResult}
                queryMovieSearch={queryMovieSearch}
                history={history} />

            <br />
            {
                movieList.length >= 1
                    ?
                    (
                        <MovieList movieList={movieList} history={history} />
                    )
                    :
                    (
                        <div className="spinner-border text-light" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div >
                    )
            }

            {
                totalPage > 1 ? <Pagination queryMovieSearch={queryMovieSearch} totalPage={totalPage} pageNumber={pageNumber} history={history} /> : null
            }

        </div >
    );
};
