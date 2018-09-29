//Midlleware de Autorização de usuário

const firebaseAdmin = require('../config/firebase');

exports.usuarioLogado = (req, res, next) => {
  let userId = req.query.uid;
  firebaseAdmin
    .auth()
    .getUser(userId)
    .then(userRecord => {
      next();
    })
    .catch(error => res.json({ mensagem: error }));
};
