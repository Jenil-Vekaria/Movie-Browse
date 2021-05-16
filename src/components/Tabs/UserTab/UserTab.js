import React, { useEffect, useState } from 'react';
import { FiAlertTriangle } from "react-icons/fi";
import { TokenValidation } from '../../../util/TokenValidation';
import { Auth } from '../../Auth/Auth';
import { useDispatch } from 'react-redux';
import { updateProfile } from '../../../redux/actions/auth';

import './styles.css';


export const UserTab = ({ history }) => {
    const dispatch = useDispatch();
    const [userProfile, setUserProfile] = useState(JSON.parse(localStorage.getItem('profile')));
    const [errorMessage, setErrorMessage] = useState('');
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        oldEmail: '',
        password: '',
        confirmPassword: ''
    });

    useEffect(() => {
        const isTokenValid = TokenValidation(userProfile);

        if (isTokenValid) {
            setUserProfile(JSON.parse(localStorage.getItem('profile')));
        }

    }, []);

    useEffect(() => {
        if (userProfile) {
            setUserData({
                ...userData,
                username: userProfile.result.username || '',
                email: userProfile.result.email || '',
                oldEmail: userProfile.result.email || ''
            });
        }
    }, [userProfile]);

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(updateProfile(userData, history))
            .then(data => data ? setErrorMessage(data) : null);

    };

    const logout = () => {
        dispatch({ type: "LOGOUT" });
        dispatch({ type: "CLEAR_FAVOURITE" });
        history.push('/search');
    };

    return (
        <div className="user-profile-container">
            {
                !userProfile ? <Auth /> :
                    (

                        <div className="row">
                            <div className="form-container col-md-6 col-sm-12">
                                <h1>User Profile</h1>



                                {
                                    errorMessage ?
                                        (
                                            <div className="alert alert-danger d-flex align-items-center" role="alert">
                                                <FiAlertTriangle style={{ marginRight: 5 }} />
                                                {errorMessage}
                                            </div>
                                        ) : null
                                }


                                <form autoComplete="on" noValidate className="w-75 d-flex flex-column " onSubmit={handleSubmit}>
                                    <label className="mt-4">Username</label>
                                    <input type="text" className="form-control fw-light fs-5" name="username" value={userData.username} onChange={handleChange} />
                                    <label className="mt-4">Email</label>
                                    <input type="email" className="form-control fw-light fs-5" name="email" value={userData.email} onChange={handleChange} />
                                    <label className="mt-4">Password</label>
                                    <input type="password" className="form-control fw-light fs-5" name="password" value={userData.password} onChange={handleChange} />
                                    <label className="mt-4">Confirm Password</label>
                                    <input type="password" className="form-control fw-light fs-5" name="confirmPassword" value={userData.confirmPassword} onChange={handleChange} />

                                    <button type="submit" className="btn w-100 mt-4 btn-success">Update</button>
                                    <button type="button" className="btn w-100 mt-4 btn-danger" onClick={logout}>Sign Out</button>

                                </form>
                            </div>
                            <div className="auth-backdrop col">
                            </div>
                        </div >

                    )
            }
        </div>
    );
};
