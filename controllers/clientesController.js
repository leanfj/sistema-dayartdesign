const mongoose = require('mongoose');

//Carregamento de modelo
const ClienteModelo = mongoose.model('Cliente');

exports.listaClientes = function(req, res, next) {
  ClienteModelo.find({ uid: req.query.uid })
    .then(data => {
      res.json({
        mensagem: 'Lista de clientes',
        info: data
      });
    })
    .catch(error => {
      res.json({
        mensagem: 'Falha ao carregar Lista de clientes',
        info: error
      });
    });
};

exports.cadastraCliente = function(req, res, next) {
  const cliente = new ClienteModelo(req.body);
  cliente
    .save()
    .then(() => {
      res.status(201).json({
        mensagem: 'Cliente cadastrado com sucesso'
      });
    })
    .catch(error => {
      res
        .status(400)
        .json({ mensagem: 'Falha ao cadastrar cliente', info: error });
    });
};

exports.atualizaCliente = function(req, res, next) {
  const clienteId = req.params.id;

  const { cliente } = req.body;

  ClienteModelo.findByIdAndUpdate(clienteId, {
    $set: {
      nome: cliente.nome,
      email: cliente.email,
      telefone: cliente.telefone,
      enderecoEntrega: cliente.enderecoEntrega,
      cep: cliente.cep,
      cpf: cliente.cpf,
      origem: cliente.origem
    }
  })
    .then(() => {
      res.json({
        mensagem: 'Cliente atualizado com sucesso'
      });
    })
    .catch(error => {
      res.json({
        mensagem: 'Falha ao atualizar o cliente',
        info: error
      });
    });
};

exports.removeCliente = function(req, res, next) {
  let clienteId = req.params.id;
  ClienteModelo.findByIdAndRemove(clienteId)
    .then(() => {
      res.status(200).json({ mensagem: 'Cliente removido com sucesso' });
    })
    .catch(error => {
      res
        .status(400)
        .json({ mensagem: 'Falha ao remover cliente', info: error });
    });
};
