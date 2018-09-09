const firebase = require('../config/firebase');
const verificaUsuario = require('../config/firebase').usuarioLogado;

exports.loginUsuario = function(req, res, next) {
  let email = req.body.email;
  let password = req.body.password;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(usuario => {
      res.json({
        mensagem: 'Login realizado com sucesso',
        info: usuario
      });
    })
    .catch(function(error) {
      res.status(400).json({
        errorCode: error.code,
        errorMessage: error.message
      });
    });
};

exports.verificaLogin = function(req, res, next) {
  let usuario = firebase.auth().currentUser;

  if (usuario) {
    res.json({ mensagem: 'Usuário está logado', info: usuario });
  } else {
    res.json({ mensagem: 'Usuário não esta logado' });
  }
};
