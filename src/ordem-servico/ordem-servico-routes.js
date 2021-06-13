const ordemServicoRoutes = require('express').Router();
const OrdemServicoController = require('./ordem-servico-controller');
const authMiddleware = require('../middlewares/auth');

const ordemServicoController = new OrdemServicoController

ordemServicoRoutes.get('/lista', authMiddleware, ordemServicoController.list);

ordemServicoRoutes.get('/lista-por-usuario-logado', authMiddleware, ordemServicoController.listByLoggedUser);

ordemServicoRoutes.get('/lista-por-usuario', authMiddleware, ordemServicoController.listByUser);

ordemServicoRoutes.post('/cadastro', authMiddleware, ordemServicoController.create)

module.exports = ordemServicoRoutes;