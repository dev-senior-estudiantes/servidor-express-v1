const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/user.controllers');

// Ruta GET para obtener usuarios
router.get('/', getUsers);

module.exports = router;