const firebase = require("../config/firebase");

exports.logoutUsuario = function(req, res, next) {
  let usuario = firebase.auth().currentUser;
  if (usuario) {
    firebase
      .auth()
      .signOut()
      .then(function() {
        res.json({
          mensagem: "Usuario deslogado com sucesso"
        });
      })
      .catch(function(error) {
        res.json({
          mensagem: "Erro ao deslogar usuário",
          info: error
        });
      });
  } else {
    res.json({
      mensagem: "Sem usuário logado"
    });
  }
};
