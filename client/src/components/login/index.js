import React from "react";
import "./index.css";

import logo from "../../assets/img/logo.png";

const Login = ({ login }) => {
  return (
    <div className="Login container">
      <div className="row">
        <div className="col s12 m6 ">
          <img className="Login__logo" src={logo} alt="logo" />
          <h1 className="Login__titulo">Login</h1>
          <form onSubmit={login} className="Login__form col s12">
            <div className="row">
              <div className="input-field col s12">
                <input className="validate" type="text" id="email" />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input type="password" id="password" />
                <label htmlFor="password">Senha</label>
              </div>
            </div>

            <button
              type="submit"
              className="waves-effect waves-light btn amber accent-3"
            >
              Login
            </button>
          </form>
          <a className="Login__recuperar" href="#">
            Recuperar Senha
          </a>
        </div>
        <div className="Login__signup col s12 m6 ">
          <div className="row">
            <h2 className="Login__signup__titulo">Registre-se agora</h2>
            <p className="Login__signup__texto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum,
              ab! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              assumenda eius perspiciatis expedita fugiat nihil illum
              repudiandae? Sint, dolore nisi.
            </p>
            <button className="Login__signup__button waves-effect waves-light btn disabled">
              Registre-se
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
