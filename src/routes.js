const express = require('express');
const routes = express.Router();
const usuarioRoutes = require('./usuario/usuario-routes');

routes.get('/', (req, res) => {
    res.send(`
        <h1>Página inicial da aplicação</h1>
        <h3>Rota de teste</h3>
    `)
})

routes.use('/usuario', usuarioRoutes)

module.exports = routes;