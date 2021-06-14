const routes = require('express').Router();
const usuarioRoutes = require('./usuario/usuario-routes');
const clienteRoutes = require('./cliente/cliente-routes');

const ordemServicoRoutes = require('./ordem-servico/ordem-servico-routes');

const impostoRoutes = require('./imposto/imposto-routes');

routes.get('/', (req, res) => {
    res.send({
        possui: true
    })
})

routes.get('/cpf', (req, res) => {
    res.send([{
            // cpf: '008.958.359.08',
            cpf: '115.890.539-40',
            nome: "Ygor Nogatz da Silva",
            UF: "PR",
            ddd: "41",
            telefone: "984538992"
        },
        {
            cpf: '008.958.359.08',
            // cpf: '115.890.539-40',
            nome: "Ygor Nogatz da Silva",
            UF: "PR",
            ddd: "41",
            telefone: "984538992"
        }
    ])
})


routes.use('/usuario', usuarioRoutes)

routes.use('/cliente', clienteRoutes)

routes.use('/ordem-servico', ordemServicoRoutes)

routes.use('/imposto', impostoRoutes);

module.exports = routes;