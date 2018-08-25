import React, { Component } from 'react';
import './index.css';

import api from '../../api/api';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarioLogado: false,
      mensagemErro: ''
    };
  }
  usuarioLogin(email, senha) {
    api
      .loginUsuario(email, senha)
      .then(res => {
        console.log(res);
        this.setState({
          usuarioLogado: true
        });
      })
      .catch(res => {
        this.setState({
          mensagemErro: 'Error ao realizar login verifique a senha ou email'
        });
      });
  }

  render() {
    return (
      <div className="Login">
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref="email" />
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" ref="password" />

        <button
          type="button"
          onClick={() => {
            this.usuarioLogin(this.refs.email.value, this.refs.password.value);
          }}
        >
          Logar
        </button>
        <p>{this.state.mensagemErro}</p>
      </div>
    );
  }
}

export default Login;
