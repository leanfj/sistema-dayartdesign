const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioModelo = new Schema({
  nomeFantasia: {
    type: String
  },
  cnpj: {
    type: String
  },
  nomeUsuario: {
    type: String
  },
  cpf: {
    type: String
  },
  site: {
    type: String
  },
  email: {
    type: String
  },
  twitter: {
    type: String
  },
  instagram: {
    type: String
  },
  whatsapp: {
    type: String
  },
  logo: {
    type: String
  },
  estado: {
    type: String
  },
  cidade: {
    type: String
  },
  bairro: {
    type: String
  },
  endereco: {
    type: String
  },
  enderecoNumero: {
    type: String
  },
  cep: {
    type: String
  },
  enderecoComplemento: {
    type: String
  },
  telFixo: {
    type: String
  },
  telCelular: {
    type: String
  },
  orcamentoValidade: {
    type: Number
  },
  saliarioMensal: {
    type: Number
  },
  horasTrabalho: {
    type: Number
  },
  diasTrabalhoSemanais: {
    type: Number
  },
  horasProducao: {
    type: Number
  },
  percentualLucro: {
    type: Number
  }
});

module.exports = mongoose.model('Usuario', usuarioModelo);
