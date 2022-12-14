require("dotenv").config({ path: "variaveis.env" });
const express = require("express");
const cors = require("cors");
/*
Para usar raw Json basta adicionar isto antes de importar as rotas -> server.use(bodyParser.json())
*/
const routes = require("./routes");
const bodyParser = require("body-parser");

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));
server.use("/api", routes);
server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});
