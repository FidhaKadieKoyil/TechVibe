import React, { useState } from 'react';
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useNavigate } from 'react-router-dom'; // Make sure this is imported
import './Checkout.css';

const stripePromise = loadStripe('pk_test_51PhKJJJhfyYKZLA9XtKnU3gqUR2GVDLmw1NbTxnXWuFHc6ixCo0MYWh7nFMWYeP7UYHR7OG9KHMz1EWfNgIB4jIT00PYGpT57o');

const Checkout = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
    });
    const [amount, setAmount] = useState(5000);
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        setLoading(true);

        try {
            const response = await fetch('/create-payment-intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            const { clientSecret } = await response.json();

            const { error } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            });

            if (error) {
                console.error(error);
                alert('Payment failed.');
                navigate('/error'); // Navigate to an error page if needed
            } else {
                alert('Payment Successful!');
                navigate('/thank-you'); // Navigate to the thank you page
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
            navigate('/error'); // Navigate to an error page if needed
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='checkout'>
            <h1>Checkout</h1>
            <form onSubmit={handleSubmit}>
                {/* Form fields */}
                <div className='checkout-section'>
                    <h2>Billing Information</h2>
                    <label>
                        Full Name:
                        <input
                            type='text'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Address:
                        <input
                            type='text'
                            name='address'
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        City:
                        <input
                            type='text'
                            name='city'
                            value={formData.city}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Postal Code:
                        <input
                            type='text'
                            name='postalCode'
                            value={formData.postalCode}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Country:
                        <input
                            type='text'
                            name='country'
                            value={formData.country}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div className='payment-section'>
                    <h2>Payment Details</h2>
                    <CardElement />
                    <button type='submit' disabled={!stripe || loading}>
                        {loading ? 'Processing...' : 'Place Order'}
                    </button>
                </div>
            </form>
        </div>
    );
};

const CheckoutWrapper = () => (
    <Elements stripe={stripePromise}>
        <Checkout />
    </Elements>
);

export default CheckoutWrapper;
