import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ImageGallery from 'react-image-gallery';
export const MovieImages = ({ backdrops }) => {

    const [movieBackdrops, setMovieBackdrops] = useState([]);


    useEffect(() => {
        if (backdrops.length > 0) {
            let images = backdrops.map(backdrop => ({
                original: `https://image.tmdb.org/t/p/original${backdrop.file_path}`,
                thumbnail: `https://image.tmdb.org/t/p/w300${backdrop.file_path}`
            }));

            setMovieBackdrops(images);
        }
    }, [backdrops]);

    return (
        <div className="section">
            <div className="d-flex" style={{ width: "100%" }}>
                <h1 className="header-title">Gallery</h1>
            </div>
            <br />
            {
                movieBackdrops.length ? <ImageGallery items={movieBackdrops} /> : null
            }
        </div >
    );
};
