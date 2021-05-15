import React, { useEffect, useState } from 'react';
import { FiSearch, FiFilm, FiTv, FiUser, FiHeart, FiLogOut } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles.css';

export const Sidenav = () => {
    const [tabNumber, settabNumber] = useState();
    const dispatch = useDispatch();
    const path = window.location.pathname;

    const handleSignout = () => {
        dispatch({ type: "LOGOUT" });
        dispatch({ type: "CLEAR_FAVOURITE" });
        settabNumber(0);
    };

    useEffect(() => {
        if (path === '/search')
            settabNumber(0);
        else if (path === '/favourite')
            settabNumber(1);
        else if (path === '/user')
            settabNumber(2);
    }, [path]);

    let iconStyles = { color: "#F3F3F4", fontSize: "1.2em" };
    return (
        <div className="navbar-container">
            <ul className="navbar-list">
                <Link to="/search">
                    <li className={`nav-item ${tabNumber === 0 ? 'active' : null}`} onClick={() => settabNumber(0)}>
                        <FiFilm style={iconStyles} />
                    </li>
                </Link>
                {/* <Link to="/tvshows">
                    <li className={`nav-item ${tabNumber === 1 ? 'active' : null}`} onClick={() => settabNumber(1)}>
                        <FiTv style={iconStyles} />
                    </li>
                </Link> */}
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

                <Link to="/search" className="logout">
                    <li className="nav-item" onClick={handleSignout}>
                        <FiLogOut style={iconStyles} />
                    </li>
                </Link>
            </ul>
        </div>
    );
};
