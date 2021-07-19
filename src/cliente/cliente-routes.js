const clienteRoutes = require('express').Router();
const ClienteController = require('./cliente-controller');
const authMiddleware = require('../middlewares/auth');

const clienteController = new ClienteController;

clienteRoutes.get('/list/:id', clienteController.index)

clienteRoutes.post('/add', authMiddleware, clienteController.create)

clienteRoutes.put('/edit/:id', clienteController.update)

clienteRoutes.delete('/delete/:id', clienteController.destroy)

module.exports = clienteRoutes