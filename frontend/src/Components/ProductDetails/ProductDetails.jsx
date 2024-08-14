import React, { useContext, useState } from 'react';
import './ProductDetails.css';
import star1 from "../Images/star1.png";
import star2 from "../Images/star2.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDetails = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const handleAddToCart = () => {
        if (selectedSize) {
            addToCart(product.id, selectedSize);
        } else {
            alert('Please select a size');
        }
    };

    return (
        <div className='productdisplay'>
            <div className='productdisplay-left'>
                <div className='productdisplay-img-list'>
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                </div>
                <div className='productdisplay-img'>
                    <img className='productdisplay-main-img' src={product.image} alt='' />
                </div>
            </div>
            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                
                <div className='productdisplay-right-prices'>
                <span>Price:</span>
                    <div className='productdisplay-right-price-old'>${product.old_price}</div>
                    <div className='productdisplay-right-price-new'>${product.new_price}</div>
                </div>
                <div className='productdisplay-right-description'>
                    <span>Description:</span>
                    {product.description}
                </div>
                <p className='productdisplay-right-category'>
                        <span>Category:</span> {product.category}
                </p>
                <div className='productdisplay-right-star'>
                    <img src={star1} alt='' />
                    <img src={star1} alt='' />
                    <img src={star1} alt='' />
                    <img src={star1} alt='' />
                    <img src={star2} alt='' />
                    <p>(122)</p>
                </div>
                <div className='productdisplay-right-size'>
                    <h1>Select size</h1>
                    <div className='productdisplay-right-sizes'>
                        {['S', 'M', 'L', 'XL'].map((size) => (
                            <div
                                key={size}
                                onClick={() => handleSizeSelect(size)}
                                className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                    <button onClick={handleAddToCart}>Add to Cart</button>
                    
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
