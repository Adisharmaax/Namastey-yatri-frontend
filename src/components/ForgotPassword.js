import React, { useState } from 'react';
import logo from '../assets/Logo.png';
import googleIcon from '../assets/google.png';
import facebookIcon from '../assets/fb.png';
import appleIcon from '../assets/apple.png';
import TextField from '@mui/material/TextField';


const ForgotPassword = ({ setView }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle password reset email logic
        setView('verificationCode'); // Move to verification code step
    };

    return (
        <div className="auth-form">
            {/* Logo at the Top Left */}
            <div className="auth-form__logo">
                <img src={logo} alt="Company Logo" />
            </div> 
            <br />
            <p className="auth-form__terms"><span onClick={() => setView('login')}>&#60; Back to login</span></p>

            <h2>Forgot Password</h2>
            <p className="auth-form__terms">Don’t worry, happens to all of us. Enter your email below to recover your password</p>
            <br />
            <form onSubmit={handleSubmit}>
            <div className="auth-form__input-group">
                <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    fullWidth
                />
            </div>
                <button type="submit" className="auth-form__button">Submit</button>
            </form>
            <div className="auth-form__divider">
            <p>or login with</p>
            </div>
            <br />
            {/* Social Login Buttons */}
            <div className="auth-form__social-login">
                
                <div className="auth-form__social-buttons">
                    <button className="auth-form__social-button">
                        <img src={googleIcon} alt="Google Icon" />
                    </button>
                    <button className="auth-form__social-button">
                        <img src={facebookIcon} alt="Facebook Icon" />
                    </button>
                    <button className="auth-form__social-button">
                        <img src={appleIcon} alt="Apple Icon" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
