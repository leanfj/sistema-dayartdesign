const firebase = require("firebase");

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAnwxefeD14VxuS1HhSUkSG_559Fmv4vPs",
  authDomain: "dayartdesign-2018.firebaseapp.com",
  databaseURL: "https://dayartdesign-2018.firebaseio.com",
  projectId: "dayartdesign-2018",
  storageBucket: "dayartdesign-2018.appspot.com",
  messagingSenderId: "55413573899"
};

firebase.initializeApp(config);

firebase.usuarioLogado = function(req, res, next) {
  let usuario = firebase.auth().currentUser;
  if (usuario) {
    next();
  } else {
    res.json({ mensagem: "Usuario não esta logado" });
  }
};

module.exports = firebase;
