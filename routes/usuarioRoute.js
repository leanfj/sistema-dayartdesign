const express = require('express');
const router = express.Router();

// const autorizacao = require('../config/firebase').usuarioLogado;

const controller = require('../controllers/usuarioController');

router.get('/:id', controller.infoUsuario);

module.exports = router;
