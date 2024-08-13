import React, { useState, useContext } from 'react';
import './Navbar.css';
import logo from '../Images/logo.jpg';
import cart_icon from '../Images/cart_icon.png';
import { Link } from 'react-router-dom'; 
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('auth-token');
        window.location.replace('/');
    };

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <Link to='/' onClick={() => setMenu("shop")}>
                    <img src={logo} alt="Logo" />
                </Link>
                <Link to='/' onClick={() => setMenu("shop")}>
                    <p>Elegant Edge</p>
                </Link>
                <div className='hamburger' onClick={toggleMenu}>
                    ☰
                </div>
            </div>
            
            <ul className={`nav-menu ${isMenuOpen ? 'show' : ''}`}>
                <li onClick={() => { setMenu("shop"); setIsMenuOpen(false); }}>
                    <Link to='/'>Shop</Link> {menu === "shop" && <hr />}
                </li>
                <li onClick={() => { setMenu("mens"); setIsMenuOpen(false); }}>
                    <Link to='/mens'>Men</Link>{menu === "mens" && <hr />}
                </li>
                <li onClick={() => { setMenu("womens"); setIsMenuOpen(false); }}>
                    <Link to='/womens'>Women</Link>{menu === "womens" && <hr />}
                </li>
                <li onClick={() => { setMenu("kids"); setIsMenuOpen(false); }}>
                    <Link to='/kids'>Kids</Link>{menu === "kids" && <hr />}
                </li>
                <div className='nav-login-cart'>
                    {localStorage.getItem('auth-token') ? (
                        <button onClick={handleLogout}>Logout</button>
                    ) : (
                        <Link to='/login'><button>Login</button></Link>
                    )}
                    <Link to='/cart'><img src={cart_icon} alt="Cart Icon" /></Link>
                    <div className='nav-cart-count'>{getTotalCartItems()}</div>
                </div>
            </ul>
        </div>
    );
}

export default Navbar;
