import React, { Component } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cliente: {}
    };
  }

  inputHandler = e => {
    e.preventDefault();
    //Utilização de spread operator para adcionar novas propriedades ao objeto
    this.setState({
      cliente: { ...this.state.cliente, [e.target.id]: e.target.value }
    });
  };
  render() {
    return (
      <div id="modal1" className="modal">
        <div className="modal-content">
          <h4>Novo Cliente</h4>
          <div className="row">
            <form
              onSubmit={e => {
                e.preventDefault();
                this.props.addCliente(this.state.cliente);
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
                  />
                  <label htmlFor="nome">Nome</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="email"
                    type="email"
                    className="validate"
                    onChange={this.inputHandler}
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="telefone"
                    type="tel"
                    className="validate"
                    onChange={this.inputHandler}
                  />
                  <label htmlFor="telefone">Telefone</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="enderecoEntrega"
                    type="text"
                    className="validate"
                    onChange={this.inputHandler}
                  />
                  <label htmlFor="enderecoEntrega">Endereço</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="cep"
                    type="text"
                    className="validate"
                    onChange={this.inputHandler}
                  />
                  <label htmlFor="cep">Cep</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="cpf"
                    type="text"
                    className="validate"
                    onChange={this.inputHandler}
                  />
                  <label htmlFor="cpf">Cpf</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="origem"
                    type="text"
                    className="validate"
                    onChange={this.inputHandler}
                  />
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
    );
  }
}

export default Modal;
