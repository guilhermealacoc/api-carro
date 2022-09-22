const express = require("express");
const router = express.Router();
const CarroController = require("./controllers/CarroController");

router.get("/carros", CarroController.buscarTodos);
router.get("/carros/:codigo", CarroController.buscarUm);
router.post("/carro", CarroController.inserir);

module.exports = router;
