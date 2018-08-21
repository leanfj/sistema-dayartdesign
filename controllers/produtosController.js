const mongoose = require("mongoose");

const ProdutoModelo = mongoose.model("Produto");

exports.listaProdutos = function (req, res, next) {
  ProdutoModelo.find({})
    .then(data => {
      res.json({
        mensagem: "Lista de produtos",
        info: data
      });
    })
    .catch(error => {
      res.json({
        mensagem: "Falha ao carregar lista de produtos",
        info: error
      });
    });
};

exports.produtoBySlug = function (req, res, next) {
  ProdutoModelo.findOne({ slug: req.params.slug })
    .then(data => {
      res.json({
        mensagem: "Produto",
        info: data
      });
    })
    .catch(error => {
      res.json({
        mensagem: "Falha ao carregar produto",
        info: error
      });
    });
};

exports.cadastraProduto = function (req, res, next) {
  let produto = new ProdutoModelo(req.body);

  produto
    .save()
    .then(() => {
      res.status(201).json({
        mensagem: "Produto cadastrado com sucesso"
      });
    })
    .catch(error => {
      res.status(400).json({
        mensagem: "Falha ao cadastrar produto",
        info: error
      });
    });
};

exports.atualizaProduto = function (req, res, next) {
  ProdutoModelo.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({
        mensagem: "Produto atualizado com sucesso",
      });
    })
    .catch(() => {
      res.json({
        mensagem: "Falha ao atualizar produto"
      })
    });
};

exports.removeProduto = function (req, res, next) {
  ProdutoModelo.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        mensagem: "Produto removido com sucesso"
      });
    })
    .catch(error => {
      res.json({
        mensagem: "Falha ao remover produto",
        info: error
      });
    });
};
