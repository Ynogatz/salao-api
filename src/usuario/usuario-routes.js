const express = require('express');
const usuarioRoutes = express.Router();
const UsuarioController = require('./usuario-controller');
const authMiddleware = require('../middlewares/auth')

const usuarioController = new UsuarioController;

usuarioRoutes.get('/', authMiddleware, usuarioController.index);

usuarioRoutes.post('/cadastro', usuarioController.create);

usuarioRoutes.post('/autenticacao', usuarioController.autenticacao)

usuarioRoutes.get('/teste', authMiddleware, usuarioController.teste)


module.exports = usuarioRoutes;