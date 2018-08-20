const express = require("express");
const router = express.Router();

const autorizacao = require("../config/firebase").usuarioLogado;

const controller = require("../controllers/clientesController");

router.get("/", autorizacao, controller.listaClientes);

router.post("/", autorizacao, controller.cadastraCliente);

router.put("/:id", autorizacao, controller.atualizaCliente);

router.delete("/:id", autorizacao, controller.removeCliente);

module.exports = router;
