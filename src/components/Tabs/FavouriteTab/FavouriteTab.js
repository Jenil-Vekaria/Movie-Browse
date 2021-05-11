import React, { useEffect, useState } from 'react';
import { TokenValidation } from '../../../util/TokenValidation';
import { Auth } from '../../Auth/Auth';

import './styles.css';

export const FavouriteTab = () => {
    const [userProfile, setUserProfile] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
        const isTokenValid = TokenValidation(userProfile);

        if (isTokenValid)
            setUserProfile(JSON.parse(localStorage.getItem('profile')));

    }, [userProfile]);

    return (
        <div className="favourite-container">
            {
                !userProfile ? <Auth /> :
                    (
                        <p>Favourite</p>
                    )
            }
        </div>
    );
};


