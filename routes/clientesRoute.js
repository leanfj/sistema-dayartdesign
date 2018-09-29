const express = require('express');
const router = express.Router();

const autorizacao = require('../controllers/loginController').usuarioLogado;

const controller = require('../controllers/clientesController');

router.get('/', autorizacao, controller.listaClientes);

router.post('/', autorizacao, controller.cadastraCliente);

router.put('/:id', controller.atualizaCliente);

router.delete('/:id', autorizacao, controller.removeCliente);

module.exports = router;
