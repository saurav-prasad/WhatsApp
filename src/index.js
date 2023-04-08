import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartState } from './context/cartState';
import reducer, { initialState } from './context/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartState reducer={reducer} initialState={initialState}>
        <App />
    </CartState>
  </React.StrictMode>
);
