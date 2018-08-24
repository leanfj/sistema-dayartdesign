const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioModelo = new Schema({
  nome: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('Usuario', usuarioModelo);
