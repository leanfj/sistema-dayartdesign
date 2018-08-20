const express = require("express");
const router = express.Router();

const autorizacao = require("../config/firebase").usuarioLogado;

const controller = require("../controllers/produtosController");

router.get("/", autorizacao, controller.listaProdutos);

router.post("/", autorizacao, controller.cadastraProduto);

module.exports = router;
