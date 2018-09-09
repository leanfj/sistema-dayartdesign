import React from 'react';
import './index.css';

import logo from '../../assets/img/logo.png';

const Login = ({ login }) => {
  return (
    <div className="Login">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Day Art Design</h1>
      <form onSubmit={login}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" />

        <button type="submit">Logar</button>
      </form>
    </div>
  );
};

export default Login;
