import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '../../assets/upload.png';

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
    description: ""  // New field added
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = { ...productDetails };

    let formData = new FormData();
    formData.append('product', image);

    await fetch('http://localhost:4000/upload', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    }).then((resp) => resp.json()).then((data) => { responseData = data });

    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch('http://localhost:4000/addproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      }).then((resp) => resp.json()).then((data) => {
        data.success ? alert("Product added") : alert("Failed to add product");
      });
    }
  };

  return (
    <div className='add-product'>
      <div className='addproduct-itemfield'>
        <p>Product title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder="Type here"/>
      </div>

      <div className='addproduct-itemfield'>
        <p>Description</p>
        <textarea 
          value={productDetails.description} 
          onChange={changeHandler} 
          name="description" 
          placeholder="Type product description here"
        />
      </div>

      <div className='addproduct-itemfield'>
        <p>Price</p>
        <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder="Type here"/>
        <p>Offer price</p>
        <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder="Type here"/>
      </div>
      
      <div className='addproduct-itemfield'>
        <p>Category</p>
        <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
      </div>
      
      <div className='addproduct-itemfield'>
        <label htmlFor="file-input">
          <img id='upload-image' src={image ? URL.createObjectURL(image) : upload_area} className='addproduct-thumbnail-img'/>
        </label>
        <input onChange={imageHandler} type="file" name="image" id='file-input' hidden/>
      </div>
      
      <button onClick={Add_Product} className='addproduct-btn'>ADD</button>
    </div>
  );
};

export default AddProduct;
