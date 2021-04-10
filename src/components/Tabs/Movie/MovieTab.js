import React from 'react';
import styles from './styles.css';
import { Search } from '../../Search/Search.js';
import { Movies } from '../../Movies/Movies';

export const MovieTab = () => {
    return (
        <div className="movietab-container">
            <Search />
            <Movies />
        </div>
    );
};

