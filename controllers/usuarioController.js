const mongoose = require('mongoose');

const UsuarioModelo = mongoose.model('Usuario');

exports.infoUsuario = (req, res, next) => {
  UsuarioModelo.findOne({ uid: req.params.id })
    .then(data => {
      res.json({
        mensagem: 'Info usuario',
        info: data
      });
    })
    .catch(() => {
      res.json({ mensagem: 'Falha ao carregar lista de usuários' });
    });
};
