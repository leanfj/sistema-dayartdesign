import React from 'react';
import MenuBar from '../../components/menuBar';
const Perfil = props => {
  return (
    <div>
      <MenuBar btnLogout={props.perfilLogout} />
      <div className="container">
        <h3>Perfil do Usário</h3>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input id="nomeFantasia" type="text" className="validate" />
                <label for="nomeFantasia">Nome Fantasia</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input id="nome" type="text" className="validate" />
                <label for="nome">Nome</label>
              </div>
              <div className="input-field col s6">
                <input id="sobre" type="text" className="validate" />
                <label for="sobre">Sobrenome</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input id="cpf" type="text" className="validate" />
                <label for="cpf">CPF</label>
              </div>
              <div className="input-field col s6">
                <input id="cnpj" type="text" className="validate" />
                <label for="cnpj">CNPJ</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" />
                <label for="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s10">
                <input id="endereco" type="text" className="validate" />
                <label for="endereco">Endereço</label>
              </div>
              <div className="input-field col s2">
                <input id="enderecoNumero" type="text" className="validate" />
                <label for="enderecoNumero">Número</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="enderecoComplemento"
                  type="text"
                  className="validate"
                />
                <label for="enderecoComplemento">Complemento</label>
              </div>
              <div className="input-field col s6">
                <input id="cep" type="text" className="validate" />
                <label for="cep">CEP</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s4">
                <input id="estado" type="text" className="validate" />
                <label for="estado">Estado</label>
              </div>
              <div className="input-field col s4">
                <input id="cidade" type="text" className="validate" />
                <label for="cidade">Cidade</label>
              </div>
              <div className="input-field col s4">
                <input id="bairro" type="text" className="validate" />
                <label for="bairro">Bairro</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
