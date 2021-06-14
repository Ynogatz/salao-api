const ImpostoController = require('./imposto-controller');
const impostoRoutes = require('express').Router();

const impostoController = new ImpostoController;

impostoRoutes.get('/list/:id', impostoController.index);

impostoRoutes.post('/add', impostoController.create);

impostoRoutes.put('/edit/:id', impostoController.update);

impostoRoutes.delete('/delete/:id', impostoController.destroy);

module.exports = impostoRoutes;