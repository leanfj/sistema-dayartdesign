import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize";
import api from "../../api/api";
class Clientes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsible: "",
      clientes: [],
      mensagemErro: "",
      isloading: true
    };
  }
  componentDidMount() {
    this.loadListaCliente();

  }

  componentDidUpdate () {
    M.AutoInit();
    M.Collapsible.init(this.state.collapsible);

  }

  loadListaCliente = () => {
    api
      .listaClientes()
      .then(res => {
        this.setState({
          clientes: res.data.info,
          collapsible: document.querySelectorAll(".collapsible"),
          isloading: false
        });

      })
      .catch(() => {
        this.setState({
          mensagemErro: "Erro ao carregar lista de Clientes"
        });
        M.toast({ html: this.state.mensagemErro });
      });
  };

  adicionarCliente = () => {
    console.log("cliente");
  };

  render() {
    const btnStyle = {
      marginRight: "10px"
    };
    const buttons = {
      marginTop: "30px"
    };
    const ClientList = () => {
      return (
        <ul className="collapsible">
          {this.state.clientes.map((cliente, index) => {
            return (
              <li key={"cliente" + index}>
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
                    <div className="col s12" style={buttons}>
                      <a
                        className="waves-effect waves-light btn teal "
                        style={btnStyle}
                      >
                        <i className="material-icons">edit</i>
                      </a>
                      <a className="waves-effect waves-light btn red ">
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
        <div className="container">
          <div className="row valign-wrapper">
            <div className="col s6">
              <h4>Clientes</h4>
            </div>
            <div className="col s2 offset-s4">
              <a
                className="waves-effect waves-light btn modal-trigger"
                href="#modal1"
                onClick={this.adicionarCliente}
              >
                <i className="material-icons">add</i>
              </a>
            </div>
            <div id="modal1" className="modal">
              <div className="modal-content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
              </div>
              <div className="modal-footer">
                <a
                  href="#!"
                  className="modal-close waves-effect waves-green btn-flat"
                >
                  Agree
                </a>
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
