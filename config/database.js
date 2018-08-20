const mongoose = require("mongoose");

// Conexão com banco de dados
module.exports = function(uri) {
  mongoose.connect(
    uri,
    { useNewUrlParser: true }
  );

  mongoose.connection.on("connected", function() {
    console.log("Mongoose! Conectado");
  });

  mongoose.connection.on("disconnected", function() {
    console.log("Mongoose! Desconectado");
  });

  mongoose.connection.on("error", function(error) {
    console.log("Mongoose! Erro na conexão: " + error);
  });

  process.on("SIGINT", function() {
    mongoose.connection.close(function() {
      console.log("Mongoose! Desconectado pelo término da aplicação");
      process.exit(0);
    });
  });
};
