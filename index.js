const Server = require("./models/server");

require("dotenv").config();

const server = new Server();

server.listen();

// const express = require("express");
// const app = express();

// const port = process.env.PORT;

// app.get("/", (req, res) => {
//   res.json({
//     msg: "Hola wacho, todo piola",
//   });
// });

// app.listen(port, () => {
//   console.log(`Escuchando en el puerto ${port}`);
// });
