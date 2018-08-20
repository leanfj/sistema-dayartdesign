const firebase = require("../config/firebase");

exports.loginUsuario = function(req, res, next) {
  let email = req.body.email;
  let password = req.body.password;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(usuario => {
      res.json({
        mensagem: "Login realizado com sucesso",
        info: usuario
      });
    })
    .catch(function(error) {
      res.json({
        errorCode: error.code,
        errorMessage: error.message
      });
    });
};
