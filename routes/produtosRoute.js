const express = require("express");
const router = express.Router();

const autorizacao = require("../config/firebase").usuarioLogado;

const controller = require("../controllers/produtosController");

router.get("/", autorizacao, controller.listaProdutos);

router.get("/:slug", autorizacao, controller.produtoBySlug);

router.post("/", autorizacao, controller.cadastraProduto);

router.put("/:id", autorizacao, controller.atualizaProduto);

router.delete("/:id", autorizacao, controller.removeProduto);

module.exports = router;
