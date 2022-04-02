const { response, request } = require("express");

// const { validationResult } = require("express-validator");

// importamos modelo de usuario
const Usuario = require("../models/usuario");

// importamos  bcryptjs
const bcryptjs = require("bcryptjs");

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

const usuariosPost = async (req = request, res = response) => {
  // Recibir la repuesta de check
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).json(errors);
  // }

  const datos = req.body;

  const { nombre, correo, password, rol } = datos;

  const usuario = new Usuario({ nombre, correo, password, rol });

  //Verificar el correo
  const existeEmail = await Usuario.findOne({ correo });
  if (existeEmail) {
    return res.status(400).json({
      msg: "El correo ya existe",
    });
  }

  //Encriptar la contraseña
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, salt);

  //Guardar los datos en la BD
  await usuario.save();

  res.json({
    usuario,
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
