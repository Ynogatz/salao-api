const ImpostoController = require('./imposto-controller');
const impostoRoutes = require('express').Router();

const impostoController = new ImpostoController;

impostoRoutes.get('/', impostoController.index);

impostoRoutes.post('/', impostoController.create);

impostoRoutes.put('/', impostoController.update);

impostoRoutes.delete('/', impostoController.destroy);

module.exports = impostoRoutes;