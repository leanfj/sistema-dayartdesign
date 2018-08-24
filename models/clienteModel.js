const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Instanciando novo schema e modelo
const clienteModelo = new Schema({
  nome: {
    type: String,
    required: true,
    unique: true
  },
  cpf: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String
    //TODO - Adcionar match com regexp /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  },
  telefone: {
    type: String
  },
  whatsapp: {
    type: Boolean
  },
  enderecoEntrega: {
    type: String
  },
  cep: {
    type: String
  },
  melhorDataCompra: {
    type: String
  },
  dataCadastro: {
    type: Date,
    default: Date.now
  },
  origem: {
    type: String,
    required: true
  }
});

//Exportação do schema criado com nome do schema e seu "modelo"
module.exports = mongoose.model('Cliente', clienteModelo);
