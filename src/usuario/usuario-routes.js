const express = require('express');
const usuarioRoutes = express.Router();
const UsuarioController = require('./usuario-controller');

const usuarioController = new UsuarioController;

usuarioRoutes.post('/usuario', usuarioController.index);

module.exports = usuarioRoutes;