const mongoose = require("mongoose");

const produtoModelo = mongoose.model("Produto");

exports.listaProdutos = function(req, res, next) {
  res.json({ mensagem: "Lista de produtos" });
};

exports.cadastraProduto = function(req, res, next) {
  let produto = new produtoModelo(req.body);

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
