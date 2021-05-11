const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.send(`
        <h1>Página inicial da aplicação</h1>
        <h3>Rota de teste</h3>
    `)
})

module.exports = routes;