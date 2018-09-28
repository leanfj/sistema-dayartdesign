import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize';

import api from '../../api/api';
import MenuBar from '../../components/menuBar';
class Clientes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsible: '',
      clientes: [],
      cliente: {
        nome: '',
        email: '',
        telefone: '',
        endereco: '',
        cep: '',
        cpf: '',
        origem: ''
      },
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
    api
      .listaClientes()
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

  adicionarCliente = e => {
    e.preventDefault();
    const novoCliente = {};
    let formElement = e.target;
    novoCliente.nome = formElement.querySelector('#nome').value;
    novoCliente.email = formElement.querySelector('#email').value;
    novoCliente.telefone = formElement.querySelector('#telefone').value;
    novoCliente.enderecoEntrega = formElement.querySelector('#endereco').value;
    novoCliente.cep = formElement.querySelector('#cep').value;
    novoCliente.cpf = formElement.querySelector('#cpf').value;
    novoCliente.origem = formElement.querySelector('#origem').value;

    api
      .cadastraCliente(novoCliente)
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
      .removeCliente(clienteId)
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
            <div id="modal1" className="modal">
              <div className="modal-content">
                <h4>Novo Cliente</h4>
                <div className="row">
                  <form onSubmit={this.adicionarCliente} className="col s12">
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="nome" type="text" className="validate" />
                        <label htmlFor="nome">Nome</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="email" type="email" className="validate" />
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="telefone" type="tel" className="validate" />
                        <label htmlFor="telefone">Telefone</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="endereco" type="text" className="validate" />
                        <label htmlFor="endereco">Endereço</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="cep" type="text" className="validate" />
                        <label htmlFor="cep">Cep</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="cpf" type="text" className="validate" />
                        <label htmlFor="cpf">Cpf</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="origem" type="text" className="validate" />
                        <label htmlFor="origem">Origem</label>
                      </div>
                    </div>
                    <div className="modal-footer center-align">
                      <button
                        className="modal-close waves-effect waves-green btn"
                        type="submit"
                      >
                        Adicionar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {this.state.isloading ? <Loader /> : <ClientList />}
        </div>
      </div>
    );
  }
}

export default Clientes;
