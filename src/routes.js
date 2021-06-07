const express = require('express');
const clienteRoutes = require('./cliente/cliente-routes');
const ordemServicoRoutes = require('./ordem-servico/ordem-servico-routes');
const routes = express.Router();
const usuarioRoutes = require('./usuario/usuario-routes');

routes.get('/', (req, res) => {
    res.send(`
        <h1>Página inicial da aplicação</h1>
        <h3>Rota de teste</h3>
    `)
})

routes.use('/ordem-servico', ordemServicoRoutes)

routes.use('/cliente', clienteRoutes)

routes.use('/usuario', usuarioRoutes)

module.exports = routes;