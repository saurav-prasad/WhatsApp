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
      <CartState reducer={reducer} initialState={initialState}>
    <CartState1 reducer={reducer1} initialState={initialState1}>
        <App />
    </CartState1>
      </CartState>
  </React.StrictMode>
);
