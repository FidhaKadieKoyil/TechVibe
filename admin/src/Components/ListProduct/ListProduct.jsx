import React, { useState, useEffect } from 'react';
import './ListProduct.css';
import remove from '../../assets/remove.png';

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch('http://localhost:4000/allproducts')
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    await fetch('http://localhost:4000/removeproduct', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    await fetchInfo();
  };

  return (
    <div className='list-product'>
      <h1>AVAILABLE PRODUCTS</h1>
      <div className='product-list-format'>
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Description</p>  {/* New field added */}
        <p>Remove</p>
      </div>
      <div className='listing-allProducts'>
        {allProducts.map((product) => (
          <React.Fragment key={product.id}>
            <div className='listproduct-item'>
              <img src={product.image} alt="" className='listproduct-product-icon' />
            </div>
            <div className='listproduct-item'>
              <p>{product.name}</p>
            </div>
            <div className='listproduct-item'>
              <p>${product.old_price}</p>
            </div>
            <div className='listproduct-item'>
              <p>${product.new_price}</p>
            </div>
            <div className='listproduct-item'>
              <p>{product.category}</p>
            </div>
            <div className='listproduct-item'>
              <p>{product.description}</p>  {/* New field added */}
            </div>
            <div className='listproduct-item'>
              <img onClick={() => removeProduct(product.id)} className='listproduct-remove-icon' src={remove} alt="" />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
