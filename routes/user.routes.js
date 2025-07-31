// Importamos express y creamos un router para manejar las rutas de usuarios
const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/user.controllers');

// Definimos la ruta GET para obtener la lista de usuarios
// Esta ruta será accesible a través de /api/users
router.get('/', getUsers);

// Exportamos el router para usarlo en el archivo principal (index.js)
module.exports = router;