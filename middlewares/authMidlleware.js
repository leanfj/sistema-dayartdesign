//Midlleware de Autorização de usuário

const firebaseAdmin = require('../config/firebase');

exports.usuarioLogado = (req, res, next) => {
  const auth = req.header('Authorization');
  firebaseAdmin
    .auth()
    .getUser(auth)
    .then(userRecord => {
      next();
    })
    .catch(error => {
      res.json({ mensagem: error });
    });
};
