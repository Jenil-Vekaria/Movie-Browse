import React, { useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import './styles.css';

export const Auth = () => {

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [isSignIn, setIsSignIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const value = e.target.innerHTML;
        console.log(value);
        if (!isSignIn) {
            if (value === 'Sign Up') {

            }
            else if (value === 'Sign In') {
            }
        }
        else {
            if (value === 'Sign Up') {
            }
            else if (value === 'Sign In') {
            }
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

                <form autoComplete="off" noValidate className="w-75 d-flex flex-column align-items-center" onSubmit={handleSubmit}>
                    {
                        !isSignIn ? <input type="text" className="form-control fw-light fs-5" placeholder="Name" /> : null
                    }

                    <input type="text" className="form-control fw-light fs-5 mt-4" placeholder="Email" />
                    <input type="password" className="form-control fw-light fs-5 mt-4" placeholder="Password" />

                    {
                        !isSignIn ? <input type="password" className="form-control fw-light fs-5 mt-4" placeholder="Confirm Password" /> : null
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
            <div className="backdrop col">
            </div>
        </div>

    );
};
