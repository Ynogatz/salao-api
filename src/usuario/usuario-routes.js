const express = require('express');
const usuarioRoutes = express.Router();
const UsuarioController = require('./usuario-controller');

const usuarioController = new UsuarioController;

usuarioRoutes.get('/', usuarioController.index);

usuarioRoutes.post('/', usuarioController.create);


module.exports = usuarioRoutes;