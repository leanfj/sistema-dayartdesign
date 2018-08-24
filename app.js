const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//Conexão com Mlab MongoDb
const conectarBD = require('./config/database');
conectarBD('mongodb://leanfj:leanfj1234@ds121982.mlab.com:21982/dayartdesign');

//Carregamento de Models
const ClienteModelo = require('./models/clienteModel');
const ProdutoModelo = require('./models/produtoModel');
const UsuarioModelo = require('./models/usuarioModel');

// Carregamento de rotas
const indexRouter = require('./routes/index');
const usuariosRouter = require('./routes/usuariosRoute');
const loginRouter = require('./routes/loginRoute');
const logoutRouter = require('./routes/logoutRoute');
const clientesRouter = require('./routes/clientesRoute');
const produtosRouter = require('./routes/produtosRoute');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Chamadas para rotas
app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/clientes', clientesRouter);
app.use('/produtos', produtosRouter);

module.exports = app;
