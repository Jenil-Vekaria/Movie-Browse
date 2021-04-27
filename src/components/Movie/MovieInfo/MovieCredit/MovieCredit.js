import React, { useState, useEffect } from 'react';
import posterPlaceholder from '../../../../images/posterPlaceholder.png';
import { WindowSize } from '../../../../util/WindowSize';

const MovieCredit = ({ movieCredit }) => {
    const [showMore, setshowMore] = useState(false);
    const [displayLimit, setDisplayLimit] = useState(12);
    const windowWidth = WindowSize();

    const getBreakpointClass = () => {
        if (windowWidth <= 540)
            return 'row-cols-3';
        else if (windowWidth <= 900)
            return 'row-cols-4';
        else if (windowWidth <= 960)
            return 'row-cols-5';
        else
            return 'row-cols-6';
    };

    useEffect(() => {
        if (showMore) {
            setDisplayLimit(movieCredit.length);
        } else {
            setDisplayLimit(12);
        }
    }, [showMore, movieCredit.length]);

    const handleShowMore = () => {
        setshowMore(prevshowMore => !prevshowMore);
    };

    if (movieCredit.length > 0) {
        return (
            <div className="movie-cast-container d-flex flex-column align-items-center">
                <div className="d-flex" style={{ width: "100%" }}>
                    <h1 className="header-title">Cast</h1>
                    <div className="d-flex justify-content-end form-switch" style={{ width: 150 }}>
                        <input className="form-check-input" type="checkbox" checked={showMore} onChange={handleShowMore} />
                        <label className="form-check-label" style={{ paddingLeft: 10 }}>Show All</label>
                    </div>
                </div>
                <br />
                <div className={`row ${getBreakpointClass()}`}>
                    {
                        movieCredit.map((cast, index) => (

                            index < displayLimit && (
                                <div className="col mb-3" key={cast.id}>
                                    <img
                                        className="movie-poster card-img-top col-5"
                                        src={cast.profile_path ? `https://image.tmdb.org/t/p/w200${cast.profile_path}` : posterPlaceholder}
                                        data-src={posterPlaceholder}
                                        loading="lazy"
                                        alt={cast.original_name}
                                    />
                                    <h6 className="mt-2">{cast.original_name}</h6>
                                    <h6 className="fst-italic fw-lighter">{cast.character}</h6>
                                </div>

                            )

                        ))
                    }
                </div >
                <br />
                <br />
            </div >
        );
    }
    else {
        return <div></div>;
    }
};

export default MovieCredit;

