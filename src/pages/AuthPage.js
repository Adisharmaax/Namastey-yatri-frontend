import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import ForgotPassword from '../components/ForgotPassword';
import VerificationCode from '../components/VerificationCode';
import SetNewPassword from '../components/SetNewPassword';
import '../styles/AuthPage.css';
import logo from '../assets/gallery.png';

const AuthPage = () => {
    const [view, setView] = useState('login');
    const navigate = useNavigate();

    // Add useEffect to manage the overflow style on body
    useEffect(() => {
        // Add the no-scroll class to the body when this component mounts
        document.body.classList.add('no-scroll-container');

        // Clean up by removing the class when the component unmounts
        return () => {
            document.body.classList.remove('no-scroll-container');
        };
    }, []);

    const handlePaymentClick = () => {
        navigate('/payment');
    };

    return (
        <div className="auth-page">
            <div className="auth-page__form">
                {view === 'login' && <AuthForm setView={setView} />}
                {view === 'signup' && <AuthForm setView={setView} isSignup />}
                {view === 'forgotPassword' && <ForgotPassword setView={setView} />}
                {view === 'verificationCode' && <VerificationCode setView={setView} />}
                {view === 'setNewPassword' && <SetNewPassword setView={setView} />}
            </div>
            <div className="auth-page__image">
                <img src={logo} alt="Company Logo" />
            </div>
        </div>
    );
};

export default AuthPage;
