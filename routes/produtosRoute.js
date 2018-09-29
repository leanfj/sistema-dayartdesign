const express = require('express');
const router = express.Router();

// const autorizacao = require("../config/firebase").usuarioLogado;

const controller = require('../controllers/produtosController');

router.get('/', controller.listaProdutos);

router.get('/:slug', controller.produtoBySlug);

router.post('/', controller.cadastraProduto);

router.put('/:id', controller.atualizaProduto);

router.delete('/:id', controller.removeProduto);

module.exports = router;
