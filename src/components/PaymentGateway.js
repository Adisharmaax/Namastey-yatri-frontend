import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import logo from '../assets/Logo.png';
import paymentImage from '../assets/gallery.png'; // Replace with actual path
import './PaymentGateway.css';

const PaymentGateway = () => {
    const [paymentData, setPaymentData] = useState({
        cardNumber: '',
        expDate: '',
        cvv: '',
        nameOnCard: '',
        country: '',
        saveInfo: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setPaymentData({
            ...paymentData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handlePayment = (e) => {
        e.preventDefault();
        // Add payment processing logic here (e.g., Stripe, PayPal)
    };

    return (
        <div className="payment-page">
            <div className="payment-page__image">
                <img src={paymentImage} alt="Scenic Beach" />
            </div>
            <div className="payment-page__form">
                <div className="payment-page__header">
                    <img src={logo} alt="Company Logo" className="payment-page__logo" />
                    <h2>Add a payment method</h2>
                    <p>Let’s get you all set up so you can access your personal account.</p>
                </div>

                <form onSubmit={handlePayment}>
                    <TextField
                        label="Card Number"
                        name="cardNumber"
                        variant="outlined"
                        placeholder="1234 5678 1234 5678"
                        value={paymentData.cardNumber}
                        onChange={handleInputChange}
                        required
                        fullWidth
                        margin="normal"
                    />
                    <div className="payment-page__row">
                        <TextField
                            label="Exp. Date"
                            name="expDate"
                            variant="outlined"
                            placeholder="MM/YY"
                            value={paymentData.expDate}
                            onChange={handleInputChange}
                            required
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="CVC"
                            name="cvv"
                            variant="outlined"
                            placeholder="CVC"
                            value={paymentData.cvv}
                            onChange={handleInputChange}
                            required
                            fullWidth
                            margin="normal"
                        />
                    </div>

                    <TextField
                        label="Name on Card"
                        name="nameOnCard"
                        variant="outlined"
                        placeholder="Full Name"
                        value={paymentData.nameOnCard}
                        onChange={handleInputChange}
                        required
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Country or Region"
                        name="country"
                        variant="outlined"
                        select
                        value={paymentData.country}
                        onChange={handleInputChange}
                        required
                        fullWidth
                        margin="normal"
                    >
                        <MenuItem value="USA">United States</MenuItem>
                        <MenuItem value="CAN">Canada</MenuItem>
                        <MenuItem value="UK">United Kingdom</MenuItem>
                    </TextField>

                    <div className="payment-page__checkbox">
                        <Checkbox
                            name="saveInfo"
                            checked={paymentData.saveInfo}
                            onChange={handleInputChange}
                        />
                        <label>Securely save my information for 1-click checkout</label>
                    </div>

                    <button type="submit" className="payment-page__button">
                        Add payment method
                    </button>

                    <p className="payment-page__disclaimer">
                        By confirming your subscription, you allow [Your Company Name] to charge
                        your card for this payment and future payments in accordance with their terms.
                        You can always cancel your subscription.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default PaymentGateway;
