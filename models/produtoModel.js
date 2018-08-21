const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const produtoModelo = new Schema({
  nomeProduto: {
    type: String,
    required: true,
    unique: true
  },
  slug: {
    type: String,
    default: function() {
      if (this.nomeProduto) {
        let slugFormatado = this.nomeProduto;
        return slugFormatado
          .split(" ")
          .join("-")
          .toLowerCase();
      }
    }
  },
  tema: {
    type: String,
    required: true
  },
  dataCadastro: {
    type: Date,
    default: Date.now
  },
  preco: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Produto", produtoModelo);
