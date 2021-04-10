import React, { useState } from 'react';
import { FiSearch, FiUser, FiHeart, FiLogOut } from "react-icons/fi";
import { Link } from 'react-router-dom';
import styles from './styles.css';

export const Sidenav = () => {

    const [tabNumber, settabNumber] = useState(0);

    let iconStyles = { color: "#F3F3F4", fontSize: "1.7em" };
    return (
        <div className="navbar-container">
            <ul className="navbar-list">
                <Link to="/search">
                    <li className={`nav-item ${tabNumber === 0 ? 'active' : null}`} onClick={() => settabNumber(0)}>
                        <FiSearch style={iconStyles} />
                    </li>
                </Link>
                <Link to="/favourite">
                    <li className={`nav-item ${tabNumber === 1 ? 'active' : null}`} onClick={() => settabNumber(1)}>
                        <FiHeart style={iconStyles} />
                    </li>
                </Link>
                <Link to="/user">
                    <li className={`nav-item ${tabNumber === 2 ? 'active' : null}`} onClick={() => settabNumber(2)}>
                        <FiUser style={iconStyles} />
                    </li>
                </Link>

                <Link to="/search">
                    <li className="nav-item" onClick={() => settabNumber(0)}>
                        <FiLogOut style={iconStyles} />
                    </li>
                </Link>
            </ul>
        </div>
    );
};
