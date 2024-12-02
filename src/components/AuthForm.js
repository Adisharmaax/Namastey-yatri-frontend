import React, { useState } from 'react';
import logo from '../assets/Logo.png';
import googleIcon from '../assets/google.png';
import facebookIcon from '../assets/fb.png';
import appleIcon from '../assets/apple.png';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './Authform.css';

const AuthForm = ({ isSignup = false, setView }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            // Handle Signup logic here
        } else {
            // Handle Login logic here
        }
    };

    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword((prev) => !prev);

    return (
        <div className="auth-form ">
            <div className="auth-form__logo">
                <img src={logo} alt="Company Logo" />
            </div>
            <br />
            <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
            <p className="auth-form__terms">{isSignup ? 'Let’s get you all set up so you can access your personal account' : 'Login to access your Golobe account'}</p>
            <br />
            <form onSubmit={handleSubmit} className="auth-form__content">
                {isSignup ? (
                    <>
                        <div className="auth-form__row">
                            <TextField
                                label="First Name"
                                name="firstName"
                                variant="outlined"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                                sx={{ width: '48%' }}
                            />
                            <TextField
                                label="Last Name"
                                name="lastName"
                                variant="outlined"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                                sx={{ width: '48%' }}
                            />
                        </div>

                        <div className="auth-form__row">
                            <TextField
                                label="Email"
                                name="email"
                                variant="outlined"
                                type="email"
                                placeholder="abc@gmail.com"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                sx={{ width: '48%' }}
                            />
                            <TextField
                                label="Phone Number"
                                name="phone"
                                variant="outlined"
                                type="tel"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                sx={{ width: '48%' }}
                            />
                        </div>

                        <TextField
                            label="Password"
                            name="password"
                            variant="outlined"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                            fullWidth
                            sx={{ marginTop: '0.8rem' }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={togglePasswordVisibility} edge="end">
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <TextField
                            label="Confirm Password"
                            name="confirmPassword"
                            variant="outlined"
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            required
                            fullWidth
                            sx={{ marginTop: '0.8rem' }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={toggleConfirmPasswordVisibility} edge="end">
                                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <div className="auth-form__terms">
                            <input
                                type="checkbox"
                                name="agreeToTerms"
                                checked={formData.agreeToTerms}
                                onChange={handleInputChange}
                            />
                            <label>I agree to the Terms and Policy</label>
                        </div>
                    </>
                ) : (
                    <>
                        <TextField
                            label="Email"
                            name="email"
                            variant="outlined"
                            type="email"
                            placeholder="abc@gmail.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            fullWidth
                        />

                        <TextField
                            label="Password"
                            name="password"
                            variant="outlined"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="*********"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                            fullWidth
                            sx={{ marginTop: '0.8rem' }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={togglePasswordVisibility} edge="end">
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                            <label style={{ display: 'flex', alignItems: 'center', fontSize: '0.9rem', color: '#555' }}>
                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    checked={formData.rememberMe}
                                    onChange={handleInputChange}
                                    style={{ marginRight: '0.5rem' }}
                                />
                                Remember Me
                            </label>
                            <span
                                style={{ color: '#ff8c00', cursor: 'pointer', fontSize: '0.9rem' }}
                                onClick={() => setView('forgotPassword')}
                            >
                                Forgot Password?
                            </span>
                        </div>
                    </>
                )}
                <button type="submit" className="auth-form__button">
                    {isSignup ? 'Sign Up' : 'Login'}
                </button>
                <p className="auth-form__toggle">
                    {isSignup ? (
                        <p>Already have an account?<span onClick={() => setView('login')}> Login</span></p>
                    ) : (
                        <p>Don’t have an account?<span onClick={() => setView('signup')}> Sign Up</span></p>
                    )}
                </p>
            </form>

            <div className="auth-form__divider">
                {isSignup ? 'or signup with' : 'or login with'}
            </div>

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

export default AuthForm;
