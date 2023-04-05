import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartState } from './context/cartState';
import reducer, { initialState } from './context/reducer';
import { CartState1 } from './context copy/cartState';
import reducer1, { initialState1 } from './context copy/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartState1 reducer={reducer1} initialState={initialState1}>
      <CartState reducer={reducer} initialState={initialState}>
        <App />
      </CartState>
    </CartState1>
  </React.StrictMode>
);
