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
const indexRouter = require('./routes/apiInfo');
const clientesRouter = require('./routes/clientesRoute');
const produtosRouter = require('./routes/produtosRoute');
const usuarioRouter = require('./routes/usuarioRoute');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Medida de segurança para esconder o nome do servidor http
app.disable('x-powered-by');

// Chamadas para rotas
app.use('/', indexRouter);
app.use('/clientes', clientesRouter);
app.use('/produtos', produtosRouter);
app.use('/usuario', usuarioRouter);

module.exports = app;
