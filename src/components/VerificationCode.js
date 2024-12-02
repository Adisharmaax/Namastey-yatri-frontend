import React, { useState } from 'react';
import logo from '../assets/Logo.png';

import TextField from '@mui/material/TextField';

const VerificationCode = ({ setView }) => {
    const [code, setCode] = useState('');

    const handleVerify = (e) => {
        e.preventDefault();
        // Verify the code
        setView('setNewPassword'); // Move to set new password step
    };

    return (
        <div className="auth-form">
            {/* Logo at the Top Left */}
            <div className="auth-form__logo">
                <img src={logo} alt="Company Logo" />
            </div> 
            <br />
            <p className="auth-form__terms"><span onClick={() => setView('login')}>&#60; Back to login</span></p>

            <h2>Verification Code</h2>
            <p className="auth-form__terms">An authentication code has been sent to your email.</p>
            <br />
            <form onSubmit={handleVerify}>

                <div className="auth-form__input-group">
                    <TextField
                        label="Verification Code"
                        variant="outlined"
                        type="text"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Enter verification code"
                        fullWidth
                    />
                </div>
                <p className="auth-form__toggle">
                    
                        <p>Didn’t receive a code?<span > Resend</span></p>
                    
                </p>
                <button type="submit" className="auth-form__button">Verify</button>
            </form>
            
        </div>
        
    );
};

export default VerificationCode;
