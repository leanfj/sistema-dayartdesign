const express = require("express");
const router = express.Router();

const controller = require("../controllers/clientesController");

router.get("/", controller.listaClientes);

router.post("/", controller.cadastraCliente);

router.put("/:id", controller.atualizaCliente);

router.delete("/:id", controller.removeCliente);

module.exports = router;
