import React, { useState, useEffect } from 'react';
import { FaGoogle } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signIn, signUp } from '../../redux/actions/auth';
import { FiAlertTriangle } from "react-icons/fi";

import './styles.css';

export const Auth = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [isSignIn, setIsSignIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    useEffect(() => {
        setErrorMessage('');
        setUserData({
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    }, [isSignIn]);

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignIn) {
            dispatch(signIn(userData, history))
                .then(data => data ? setErrorMessage(data) : null);
        }
        else {
            dispatch(signUp(userData, history))
                .then(data => data ? setErrorMessage(data) : null);
        }
    };

    return (
        <div className="row">
            <div className="form-container col-md-6 col-sm-12">
                <h1>{isSignIn ? 'Sign In' : 'Create Account'}</h1>

                {
                    !isSignIn ?
                        (
                            <>
                                <div className="google-signin mt-5 bg-primary">
                                    <span className="google-logo"><FaGoogle /></span>
                                    <div className="fs-5 fw-light">
                                        Create Account with Google
                                </div>
                                </div>
                                <p className="fs-5 mt-4 fw-lighter">or use email for registration:</p>
                            </>
                        ) : null
                }

                {
                    errorMessage ?
                        (
                            <div className="alert alert-danger d-flex align-items-center" role="alert">
                                <FiAlertTriangle style={{ marginRight: 5 }} />
                                {errorMessage}
                            </div>
                        ) : null
                }


                <form autoComplete="on" noValidate className="w-75 d-flex flex-column align-items-center" onSubmit={handleSubmit}>
                    {
                        !isSignIn ? <input type="text" className="form-control fw-light fs-5" placeholder="Username" name="username" value={userData.username} onChange={handleChange} /> : null
                    }

                    <input type="text" className="form-control fw-light fs-5 mt-4" placeholder="Email" name="email" value={userData.email} onChange={handleChange} />
                    <input type="password" className="form-control fw-light fs-5 mt-4" placeholder="Password" name="password" value={userData.password} onChange={handleChange} />

                    {
                        !isSignIn ? <input type="password" className="form-control fw-light fs-5 mt-4" placeholder="Confirm Password" name="confirmPassword" value={userData.confirmPassword} onChange={handleChange} /> : null
                    }

                    <button type="submit" className="btn w-100 mt-4 btn-success">
                        {
                            isSignIn ? 'Sign In' : 'Sign Up'
                        }
                    </button>
                    <p className="fs-6 mt-4 fw-lighter have-account" onClick={() => setIsSignIn(prevIsSignIn => !prevIsSignIn)}>
                        {
                            isSignIn ? `Don't have an account?` : 'Already have an account?'
                        }
                    </p>



                </form>
            </div>
            <div className="auth-backdrop col">
            </div>
        </div >

    );
};
