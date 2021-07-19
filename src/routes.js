const routes = require('express').Router();
const usuarioRoutes = require('./usuario/usuario-routes');
const clienteRoutes = require('./cliente/cliente-routes');

const ordemServicoRoutes = require('./ordem-servico/ordem-servico-routes');


routes.get('/simulacao-evento', (req, res, next) => {
    res.send({ tipoAutomacao: 'ok' })
})
routes.use('/usuario', usuarioRoutes)

routes.use('/cliente', clienteRoutes)

routes.use('/ordem-servico', ordemServicoRoutes);

module.exports = routes;