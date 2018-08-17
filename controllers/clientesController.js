const mongoose = require("mongoose");

//Carregamento de modelo
const ClienteModelo = mongoose.model("Cliente");

exports.listaClientes = function(req, res, next) {
  ClienteModelo.find({})
    .then(data => {
      res.json({
        mensagem: "Lista de clientes",
        info: data
      });
    })
    .catch(error => {
      res.json({
        mensagem: "Falha ao carregar Lista de clientes",
        info: error
      });
    });
};

exports.cadastraClientes = function(req, res, next) {
  let cliente = new ClienteModelo(req.body);

  cliente
    .save()
    .then(e => {
      res.status(201).json({
        mensagem: "Cliente cadastrado com sucesso"
      });
    })
    .catch(error => {
      res.status(400).json({
        mensagem: "Falha ao cadastrar cliente",
        info: error
      });
    });
};

exports.atualizaClientes = function(req, res, next) {
  let clienteId = req.params.id;
  res.json({
    id: clienteId,
    dados: req.body
  });
};

exports.removeClientes = function(req, res, next) {
  res.json(req.body);
};
