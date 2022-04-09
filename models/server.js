const express = require("express");
const { dbConnection } = require("../database/config"); //Importando la conf de la conexion con la BD
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.authPath = "/api/auth";
    this.usuariosPath = "/api/usuarios";

    // concectar BD
    this.conectarDB();

    //   middLewares
    this.middlewares();

    // Rutas
    this.routes();
  }

  // llamando la funcion para conectar la base de datos
  async conectarDB() {
    await dbConnection();
  }

  //   middLewares
  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(express.json());

    // directorio publico
    this.app.use(express.static("public"));
  }

  // Rutas
  routes() {
    this.app.use(this.authPath, require("../routes/auth"));
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Escuchando en el puerto ${this.port}`);
    });
  }
}
module.exports = Server;
