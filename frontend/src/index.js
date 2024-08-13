import React from 'react';
import ReactDOM from 'react-dom/client'; // Update import to use 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; // Ensure this is imported
import App from './App'; // Your main App component
import reportWebVitals from './reportWebVitals';
import './index.css'; // Your global styles
import ShopContextProvider from './Context/ShopContext'; // Import the context provider

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot to create the root

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
