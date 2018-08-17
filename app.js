const express = require("express");
// const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

//Conexão com Mlab MongoDb
const conectarBD = require("./config/database");
conectarBD("mongodb://leanfj:leanfj1234@ds121982.mlab.com:21982/dayartdesign");

// Carregamento de rotas
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const clienteRouter = require("./routes/clientes");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Direcionar para index da pasta public
// app.use(express.static(path.join(__dirname, "public")));

// Chamadas para rotas
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/clientes", clienteRouter);

module.exports = app;
