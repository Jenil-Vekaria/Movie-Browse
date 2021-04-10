import React from 'react';
import { FiSearch, FiUser, FiHeart, FiLogOut } from "react-icons/fi";
import styles from './Sidenav.css';

export const Sidenav = () => {
    let iconStyles = { color: "#F3F3F4", fontSize: "1.7em" };

    return (
        <div className="navbar-container">
            <ul className="navbar-list">
                <li className="nav-item">
                    <FiSearch style={iconStyles} />
                </li>
                <li className="nav-item">
                    <FiHeart style={iconStyles} />
                </li>
                <li className="nav-item">
                    <FiUser style={iconStyles} />
                </li>
                <li className="nav-item">
                    <FiLogOut style={iconStyles} />
                </li>
            </ul>
        </div>
    );
};
