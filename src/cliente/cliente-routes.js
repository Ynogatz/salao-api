const clienteRoutes = require('express').Router();
const ClienteController = require('./cliente-controller');

const clienteController = new ClienteController;

clienteRoutes.get('/', clienteController.index)

clienteRoutes.post('/', clienteController.create)

clienteRoutes.put('/:id', clienteController.update)

clienteRoutes.delete('/:id', clienteController.destroy)

module.exports = clienteRoutes