import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import logo from '../assets/Logo.png';


const SetNewPassword = ({ setView }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleReset = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            // Handle new password save
            setView('login'); // Redirect to login after reset
        } else {
            alert("Passwords do not match");
        }
    };

    return (
        <div className="auth-form">
            <div className="auth-form__logo">
                <img src={logo} alt="Company Logo" />
            </div> 
            <br />
            <h2>Set a Password</h2>
            <p className="auth-form__terms">Your previous password has been reseted. Please set a new password for your account.</p>
            <br />
            <form onSubmit={handleReset} className="auth-form__content">
                <TextField
                    label="New Password"
                    variant="outlined"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter new password"
                    fullWidth
                    required
                    sx={{ marginBottom: '1rem' }}
                />
                <TextField
                    label="Confirm Password"
                    variant="outlined"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    fullWidth
                    required
                    sx={{ marginBottom: '1rem' }}
                />
                <button type="submit" className="auth-form__button">Reset Password</button>
            </form>
        </div>
    );
};

export default SetNewPassword;
