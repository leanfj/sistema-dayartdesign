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

exports.cadastraCliente = function(req, res, next) {
  let cliente = new ClienteModelo(req.body);

  cliente
    .save()
    .then(() => {
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

exports.atualizaCliente = function(req, res, next) {
  let clienteId = req.params.id;
  ClienteModelo.findByIdAndUpdate(clienteId, {
    $set: {
      nome: req.body.nome
    }
  })
    .then(() => {
      res.json({
        mensagem: "Cliente atualizado com sucesso"
      });
    })
    .catch(error => {
      res.json({
        mensagem: "Falha ao atualizar o cliente",
        info: error
      });
    });
};

exports.removeCliente = function(req, res, next) {
  let clienteId = req.params.id;
  ClienteModelo.findByIdAndRemove(clienteId)
    .then(() => {
      res.json({ mensagem: "Cliente removido com sucesso" });
    })
    .catch(error => {
      res.json({ mensagem: "Falha ao remover cliente", info: error });
    });
};
