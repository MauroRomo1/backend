const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  //   const query = req.query;
  const { nombre = "no name", apikey, limit = 5, page = 1 } = req.query;
  res.json({
    msg: "Bienvenido wacho, todo piola?",
    nombre,
    apikey,
    limit,
    page,
  });
};

const usuariosPost = (req = request, res = response) => {
  const datos = req.body;

  res.json({
    msg: "POST - Info creada",
    datos,
  });
};

const usuariosPut = (req = request, res = response) => {
  const id = req.params.id;

  res.json({
    msg: "PUT- Info actualizada",
    id,
  });
};

const usuariosDelete = (req = request, res = response) => {
  const id = req.params.id;

  res.json({
    msg: "DELETE - Info eliminada",
    id,
  });
};

module.exports = { usuariosGet, usuariosPost, usuariosDelete, usuariosPut };
