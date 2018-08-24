const mongoose = require('mongoose');

const UsuarioModelo = mongoose.model('Usuario');

exports.listaUsuarios = (req, res, next) => {
  UsuarioModelo.find({})
    .then(data => {
      res.json({
        mensagem: 'Lista de usuarios',
        info: data
      });
    })
    .catch(() => {
      res.json({ mensagem: 'Falha ao carregar lista de usuários' });
    });
};
exports.cadastraUsuario = (req, res, next) => {
  let usuario = new UsuarioModelo(req.body);

  usuario
    .save()
    .then(() => {
      res.status(201).json({
        mensagem: 'Usuário cadastrado com sucesso'
      });
    })
    .catch(error => {
      res.status(400).json({
        mensagem: 'Falha ao cadastrar usuário'
      });
    });
};

exports.atualizaUsuario = (req, res, next) => {
  let usuarioId = req.params.id;

  UsuarioModelo.findByIdAndUpdate(usuarioId, {
    $set: {
      nome: req.body.nome
    }
  })
    .then(() => {
      res.json({
        mensagem: 'Usuário atualizado com sucesso'
      });
    })
    .catch(error => {
      res.json({
        mensagem: 'Falha ao atualizar usuário',
        info: error
      });
    });
};

exports.removeUsuario = (req, res, next) => {
  let usuarioId = req.params.id;

  UsuarioModelo.findByIdAndRemove(usuarioId)
    .then(() => {
      res.json({ mensagem: 'Usuario removido com sucesso' });
    })
    .catch(error => {
      res.json({
        mensagem: 'Falha ao remover usuário',
        info: error
      });
    });
};
