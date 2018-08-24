const express = require('express');
const router = express.Router();

const autorizacao = require('../config/firebase').usuarioLogado;

const controller = require('../controllers/usuariosController');

router.get('/', autorizacao, controller.listaUsuarios);

router.post('/', autorizacao, controller.cadastraUsuario);

router.put('/:id', autorizacao, controller.atualizaUsuario);

router.delete('/:id', autorizacao, controller.removeUsuario);

module.exports = router;
