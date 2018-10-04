import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize';

import api from '../../api/api';

import MenuBar from '../../components/menuBar';
import Modal from '../../components/modal';

class Clientes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsible: '',
      clientes: [],
      cliente: {},
      mensagem: '',
      mensagemErro: '',
      isloading: true
    };
  }
  componentDidMount() {
    M.AutoInit();
    this.loadListaCliente();
  }

  componentDidUpdate() {
    M.AutoInit();
    M.Collapsible.init(this.state.collapsible);
  }

  loadListaCliente = () => {
    // const userId = { uid: this.props.user.uid };
    api
      .listaClientes(this.props.user.uid)
      .then(res => {
        this.setState({
          clientes: res.data.info || [],
          collapsible: document.querySelectorAll('.collapsible'),
          isloading: false
        });
      })
      .catch(() => {
        this.setState({
          mensagemErro: 'Erro ao carregar lista de Clientes'
        });
        M.toast({ html: this.state.mensagemErro });
      });
  };

  adicionarCliente = cliente => {
    //Adcionar User ID Logado
    cliente.uid = this.props.user.uid;
    api
      .cadastraCliente(cliente, cliente.uid)
      .then(res => {
        this.setState({ mensagem: res.data.mensagem });
        this.loadListaCliente();
        M.toast({ html: this.state.mensagem });
      })
      .catch(error => {
        if (error.response.data.info) {
          this.setState({
            mensagemErro: 'Falha: Informe os dados para cadastro'
          });
        } else {
          this.setState({ mensagemErro: error.response.data.mensagem });
        }
        M.toast({ html: this.state.mensagemErro });
      });
  };

  removeCliente = clienteId => {
    api
      .removeCliente(clienteId, this.props.user.uid)
      .then(res => {
        this.setState({ mensagem: res.data.mensagem });
        this.loadListaCliente();
        M.toast({ html: this.state.mensagem });
      })
      .catch(error => {
        this.setState({ mensagem: error.response.data.mensagem });
        this.loadListaCliente();
        M.toast({ html: this.state.mensagem });
      });
  };

  render() {
    const btnStyle = {
      marginRight: '10px'
    };
    const buttons = {
      marginTop: '30px'
    };
    const ClientList = () => {
      return (
        <ul className="collapsible">
          {this.state.clientes.map((cliente, index) => {
            return (
              <li key={'cliente' + index}>
                <div className="collapsible-header">
                  <i className="material-icons">face</i>
                  {cliente.nome}
                </div>
                <div className="collapsible-body">
                  <div className="row">
                    <div className="col s2">
                      <div>Email:</div>
                      <div>Telefone:</div>
                      <div>Endereço:</div>
                      <div>Cep:</div>
                      <div>CPF:</div>
                      <div>Origem:</div>
                    </div>
                    <div className="col s10">
                      <div>{cliente.email}</div>
                      <div>{cliente.telefone}</div>
                      <div>{cliente.enderecoEntrega}</div>
                      <div>{cliente.cep}</div>
                      <div>{cliente.cpf}</div>
                      <div>{cliente.origem}</div>
                    </div>
                    <div className="col s12 right-align" style={buttons}>
                      <a
                        className="waves-effect waves-light btn teal "
                        style={btnStyle}
                      >
                        <i className="material-icons">edit</i>
                      </a>
                      <a
                        className="waves-effect waves-light btn red "
                        onClick={() => {
                          this.removeCliente(cliente._id);
                        }}
                      >
                        <i className="material-icons">delete</i>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      );
    };

    const Loader = () => {
      return (
        <div className="progress">
          <div className="indeterminate" />
        </div>
      );
    };

    return (
      <div>
        <MenuBar btnLogout={this.props.clientesLogout} />
        <div className="container">
          <div className="row valign-wrapper">
            <div className="col s6">
              <h4>Clientes</h4>
            </div>
            <div className="col s2 offset-s4 right-align">
              <a
                className="waves-effect waves-light btn modal-trigger"
                href="#modal1"
              >
                <i className="material-icons">add</i>
              </a>
            </div>
            <Modal
              inputUpdate={this.inputHandler}
              addCliente={this.adicionarCliente}
            />
          </div>
          {this.state.isloading ? <Loader /> : <ClientList />}
        </div>
      </div>
    );
  }
}

export default Clientes;
