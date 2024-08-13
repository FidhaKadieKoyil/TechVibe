import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cartdetails.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_icon.png';

const Cartdetails = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout');
    };

    return (
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Size</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className='cartitems-format'>
                                <img src={e.image} alt='' className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <p>{cartItems[e.id]}</p>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <p>{e.size}</p> {/* Display the selected size */}
                                <img
                                    className='cartitems-remove-icon'
                                    src={remove_icon}
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
                    <button onClick={handleCheckout}>Proceed to checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cartdetails;
