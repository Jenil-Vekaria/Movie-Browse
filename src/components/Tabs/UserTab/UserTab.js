import React from 'react';
import { Auth } from '../../Auth/Auth';
import './styles.css';


export const UserTab = () => {
    return (
        <div className="user-profile-container">
            <Auth />
        </div>
    );
};
