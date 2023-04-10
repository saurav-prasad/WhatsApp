import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartState } from './context/cartState';
import reducer, { initialState } from './context/reducer';
import { LoginState } from './components/loginContext/loginState';
import loginreducer, { loginInitialState } from './components/loginContext/LoginReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginState reducer={loginreducer} initialState={loginInitialState}>
      <CartState reducer={reducer} initialState={initialState}>
        <App />
      </CartState>
    </LoginState>
  </React.StrictMode>
);
