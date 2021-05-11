const Usuario = require('./usuario')

class UsuarioController {
    async index(req, res, next) {
        try {
            res.send(`
            <h1>Página inicial da aplicação</h1>
            <h3>Rota de teste</h3>
        `)
        } catch (e) {
            next(e)
        }
    }


    async create(req, res, next) {
        try {
            const usuario = req.body;

            const novoUsuario = await Usuario.create(usuario)
            res.send({ usuario })

        } catch (e) {
            next(e)
        }
    }
}
module.exports = UsuarioController;