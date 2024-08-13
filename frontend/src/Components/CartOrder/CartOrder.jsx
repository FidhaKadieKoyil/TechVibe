import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './CartOrder.css';

import { ShopContext } from '../../Context/ShopContext';
import remove from '../Images/remove.png';

const CartOrder = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleCheckout = () => {
        navigate('/checkout'); // Navigate to the checkout page
    };

    return (
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id} className='cartitems-format'>
                            <div className='cartitems-format-product'>
                                <img src={e.image} alt='' className='carticon-product-icon' />
                            </div>
                            <div className='cartitems-format-details'>
                                <div className='cartitems-format-title'>
                                    <p>{e.name}</p>
                                </div>
                                <div className='cartitems-format-price'>
                                    <p>Price: ${e.new_price}</p>
                                </div>
                                <div className='cartitems-format-quantity'>
                                    <p>Quantity: {cartItems[e.id]}</p>
                                </div>
                                <div className='cartitems-format-total'>
                                    <p>Total: ${e.new_price * cartItems[e.id]}</p>
                                </div>
                            </div>
                            <div className='cartitems-format-remove'>
                                <img
                                    className='cartitems-remove-icon'
                                    src={remove}
                                    onClick={() => removeFromCart(e.id)}
                                    alt='Remove'
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className='cartitems-down'>
                <div className='cartitems-total'>
                    <h1>Cart Totals</h1>
                    <div>
                        <div className='cartitems-total-item'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <p>Shipping fee: Free</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button onClick={handleCheckout}>Proceed to checkout</button> {/* Updated button */}
                </div>
            </div>
        </div>
    );
};

export default CartOrder;
