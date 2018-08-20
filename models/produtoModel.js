const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const produtoModelo = new Schema({
  nomeProduto: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Produto", produtoModelo);
