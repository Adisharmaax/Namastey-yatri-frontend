// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import HomePage from './HomePage';
import PaymentGateway from './components/PaymentGateway'; // Ensure this path is correct
//import NotFound from './components/NotFound'; // Optional: Create a NotFound component for 404 handling
import './App.css';
function App() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<HomePage />} />

                <Route path="/auth" element={<AuthPage />} />
                <Route path="/payment" element={<PaymentGateway />} />
                {/*<Route path="*" element={<NotFound />} />  Optional: Catch all undefined routes */}
            </Routes>
        </Router>
    );
}

export default App;