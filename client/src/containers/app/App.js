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
          usuarioInfo: user
        });
      } else {
        this.setState({
          usuarioLogado: false
        });
      }
    });
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
        this.setState({
          mensagemErro: 'Erro ao realizar login verifique a senha ou email'
        });
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
                <Login
                  login={this.usuarioLogin}
                  inputEmail={this.emailUsuarioHandler}
                  inputSenha={this.senhaUsuarioHandler}
                />
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
                <Login
                  login={this.usuarioLogin}
                  inputEmail={this.emailUsuarioHandler}
                  inputSenha={this.senhaUsuarioHandler}
                />
              )
            }
          />
          <Route
            exact
            path="/clientes"
            render={() =>
              this.state.usuarioLogado ? (
                <Clientes
                  clientesLogout={this.usuarioLogout}
                  user={this.state.usuarioInfo}
                />
              ) : (
                <Login
                  login={this.usuarioLogin}
                  inputEmail={this.emailUsuarioHandler}
                  inputSenha={this.senhaUsuarioHandler}
                />
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
                <Login
                  login={this.usuarioLogin}
                  inputEmail={this.emailUsuarioHandler}
                  inputSenha={this.senhaUsuarioHandler}
                />
              )
            }
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
