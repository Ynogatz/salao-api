const clienteRoutes = require('express').Router();
const ClienteController = require('./cliente-controller');

const clienteController = new ClienteController;

clienteRoutes.get('/list/:id', clienteController.index)

clienteRoutes.post('/cadastro', clienteController.create)

clienteRoutes.put('/edit/:id', clienteController.update)

clienteRoutes.delete('/delete/:id', clienteController.destroy)

module.exports = clienteRoutes