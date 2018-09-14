import React from "react";
import "./index.css";

import logo from "../../assets/img/logo.png";

const Login = ({login}) =>  {

    return (
      <div className="Login">
        <img src={logo} alt="logo" />
        <h1>Day Art Design</h1>
        <form onSubmit={login}>
          <input type="text" placeholder="Usuário ou senha" id="email"/>
          <input type="password" placeholder="Senha" id="password"/>
          <button type="submit">Login</button>
        </form>
      </div>
    );
}



export default Login;
