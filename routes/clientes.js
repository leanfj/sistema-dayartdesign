const express = require("express");
const router = express.Router();

const controller = require("../controllers/clientes");

router.get("/", controller.listaClientes);

router.post("/", controller.cadastraClientes);

router.put("/:id", controller.atualizaClientes);

router.delete("/", controller.removeClientes);

module.exports = router;
