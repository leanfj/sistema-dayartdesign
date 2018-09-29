const express = require('express');
const router = express.Router();

// const autorizacao = require('../config/firebase').usuarioLogado;

const controller = require('../controllers/usuariosController');

router.get('/', controller.listaUsuarios);

router.post('/', controller.cadastraUsuario);

router.put('/:id', controller.atualizaUsuario);

router.delete('/:id', controller.removeUsuario);

module.exports = router;
