import React, { Component } from 'react';
import './App.css';

import api from '../../api/api';

//Import Materialize-CSS
import 'materialize-css/dist/css/materialize.css';
import M from 'materialize-css/dist/js/materialize';

//Componentes de roteamento
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import Login from '../../components/login';

//containers
import Dashboard from '../dashboard';
import Clientes from '../clientes';
import Produtos from '../produtos';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarioLogado: false,
      usuarioInfo: '',
      mensagemErro: ''
    };
  }
  componentDidMount() {
    api.verificaUsuarioLogado().then(res => {
      if (res.data.info) {
        this.setState({
          usuarioLogado: true,
          usuarioInfo: res.data.info
        });
      } else {
        this.setState({
          usuarioLogado: false
        });
      }
    });
  }

  usuarioLogin = e => {
    // e.preventDefault();
    let target = document.querySelector('.Login__form');
    let email = target.querySelector('#email');
    let password = target.querySelector('#password');

    api
      .loginUsuario(email.value, password.value)
      .then(res => {
        this.setState({
          usuarioLogado: true,
          usuarioInfo: res.data.info.user
        });
      })
      .catch(res => {
        this.setState({
          mensagemErro: 'Erro ao realizar login verifique a senha ou email'
        });
        M.toast({ html: this.state.mensagemErro });
      });
  };

  usuarioLogout = () => {
    api
      .logoutUsuario()
      .then(res => {
        this.setState({
          usuarioLogado: false,
          usuarioInfo: ''
        });
      })
      .catch(res => {
        this.setState({
          mensagemErro: 'Erro ao realizar o logout'
        });
      });
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              this.state.usuarioLogado ? (
                <Dashboard dashBoardlogout={this.usuarioLogout} />
              ) : (
                <Login login={this.usuarioLogin} />
              )
            }
          />
          <Route
            exact
            path="/dashboard"
            render={() =>
              this.state.usuarioLogado ? (
                <Dashboard dashBoardlogout={this.usuarioLogout} />
              ) : (
                <Login login={this.usuarioLogin} />
              )
            }
          />
          <Route
            exact
            path="/clientes"
            render={() =>
              this.state.usuarioLogado ? (
                <Clientes clientesLogout={this.usuarioLogout} />
              ) : (
                <Login login={this.usuarioLogin} />
              )
            }
          />

          <Route
            exact
            path="/produtos"
            render={() =>
              this.state.usuarioLogado ? (
                <Produtos produtosLogout={this.usuarioLogout} />
              ) : (
                <Login login={this.usuarioLogin} />
              )
            }
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
