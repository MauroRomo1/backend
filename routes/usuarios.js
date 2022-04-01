const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");

const {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
} = require("../controllers/usuarios");

const router = Router();

router.get("/", usuariosGet);

router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check(
      "password",
      "La contraseña debe tener como minimo 6 caracteres"
    ).isLength({ min: 6 }),
    check("correo", "No es un correo valido").isEmail(),
    check("rol", "El rol no es valido").isIn(["USER_ROLE", "ADMIN_ROLE"]),
    validarCampos,
  ],
  usuariosPost
);

router.put("/:id", usuariosPut);

router.delete("/:id", usuariosDelete);

module.exports = router;
