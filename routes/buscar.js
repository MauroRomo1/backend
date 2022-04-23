const { Router } = require("express");
const { buscar } = require("../controllers/buscar");
<<<<<<< HEAD
const router = Router();
=======

const router = Router;
>>>>>>> parent of ca94b77 (Corrigiendo bug)

router.get("/:coleccion/:termino", buscar);

module.exports = router;
