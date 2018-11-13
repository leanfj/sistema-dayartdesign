import React, { Component } from 'react';

import M from 'materialize-css/dist/js/materialize';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cliente: {} || this.props.dadosClienteProp
    };
  }
  componentDidMount() {
    M.AutoInit();
    if (this.props.dadosClienteProp) {
      this.setState({ cliente: this.props.dadosClienteProp });
    }
  }
  inputHandler = e => {
    e.preventDefault();
    //Utilização de spread operator para adcionar novas propriedades ao objeto
    this.setState({
      cliente: { ...this.state.cliente, [e.target.id]: e.target.value }
    });
  };
  render() {
    const { cliente } = this.state;

    const {
      idProp,
      modalTitleProp,
      dadosClienteProp,
      atualizaClienteProp,
      adcionarClienteProp
    } = this.props;

    return (
      <div id={idProp} className="modal">
        <div className="modal-content">
          <h4>{modalTitleProp}</h4>
          <div className="row">
            <form
              onSubmit={e => {
                e.preventDefault();
                if (dadosClienteProp) {
                  atualizaClienteProp(cliente, cliente._id);
                } else {
                  adcionarClienteProp(cliente);
                }
              }}
              className="col s12"
            >
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="nome"
                    type="text"
                    className="validate"
                    onChange={this.inputHandler}
                    defaultValue={cliente.nome}
                    placeholder="Nome"
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="email"
                    type="email"
                    className="validate"
                    onChange={this.inputHandler}
                    defaultValue={cliente.email}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="telefone"
                    type="tel"
                    className="validate"
                    onChange={this.inputHandler}
                    defaultValue={cliente.telefone}
                    placeholder="Telefone"
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="enderecoEntrega"
                    type="text"
                    className="validate"
                    onChange={this.inputHandler}
                    defaultValue={cliente.enderecoEntrega}
                    placeholder="Endereço"
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="cep"
                    type="text"
                    className="validate"
                    onChange={this.inputHandler}
                    defaultValue={cliente.cep}
                    placeholder="Cep"
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="cpf"
                    type="text"
                    className="validate"
                    onChange={this.inputHandler}
                    defaultValue={cliente.cpf}
                    placeholder="CPF"
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="origem"
                    type="text"
                    className="validate"
                    onChange={this.inputHandler}
                    defaultValue={cliente.origem}
                    placeholder="Origem"
                  />
                </div>
              </div>
              <div className="modal-footer center-align">
                <button
                  className="modal-close waves-effect waves-green btn"
                  type="submit"
                >
                  {dadosClienteProp ? 'Atualizar' : 'Cadastrar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
