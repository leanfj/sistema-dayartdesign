import React, { Component } from 'react';
import './App.css';

//Firebase Import
import firebase from '../../config/firebase';

//Import Materialize-CSS
import 'materialize-css/dist/css/materialize.css';
import M from 'materialize-css/dist/js/materialize';

//Componentes de roteamento
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import Login from '../../components/login';
import LaodScreen from '../../components/loadScreen';

//containers
import Dashboard from '../dashboard';
import Clientes from '../clientes';
import Produtos from '../produtos';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarioLogado: false,
      islogin: true,
      usuarioInfo: '',
      mensagemErro: '',
      emailUsuario: '',
      senhaUsuario: ''
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          usuarioLogado: true,
          islogin: false,
          usuarioInfo: user
        });
      } else {
        this.setState({
          usuarioLogado: false,
          islogin: false
        });
      }
    });
    M.AutoInit();
  }

  emailUsuarioHandler = e => {
    let emailValue = e.target.value;
    this.setState({ emailUsuario: emailValue });
  };

  senhaUsuarioHandler = e => {
    let senhaValue = e.target.value;
    this.setState({ senhaUsuario: senhaValue });
  };

  usuarioLogin = e => {
    let email = this.state.emailUsuario;
    let senha = this.state.senhaUsuario;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then(res => {
        this.setState({
          usuarioLogado: true
        });
        console.log(res);
      })
      .catch(error => {
        if (error.code === 'auth/wrong-password') {
          this.setState({
            mensagemErro: 'Senha incorreta'
          });
        }
        if (error.code === 'auth/user-not-found') {
          this.setState({
            mensagemErro: 'Email inválido ou usuário não cadastrado'
          });
        }
        console.log(error);
        M.toast({ html: this.state.mensagemErro });
      });
  };

  usuarioLogout = () => {
    firebase
      .auth()
      .signOut()
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
    const login = !this.state.islogin ? (
      <Login
        login={this.usuarioLogin}
        inputEmail={this.emailUsuarioHandler}
        inputSenha={this.senhaUsuarioHandler}
      />
    ) : (
      <LaodScreen />
    );
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              !this.state.usuarioLogado ? (
                login
              ) : (
                <Dashboard dashBoardlogout={this.usuarioLogout} />
              )
            }
          />
          <Route
            exact
            path="/dashboard"
            render={() =>
              !this.state.usuarioLogado ? (
                login
              ) : (
                <Dashboard dashBoardlogout={this.usuarioLogout} />
              )
            }
          />
          <Route
            exact
            path="/clientes"
            render={() =>
              !this.state.usuarioLogado ? (
                login
              ) : (
                <Clientes
                  clientesLogout={this.usuarioLogout}
                  user={this.state.usuarioInfo}
                />
              )
            }
          />

          <Route
            exact
            path="/produtos"
            render={() =>
              !this.state.usuarioLogado ? (
                login
              ) : (
                <Produtos produtosLogout={this.usuarioLogout} />
              )
            }
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
