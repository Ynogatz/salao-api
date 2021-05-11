const Usuario = require('./usuario')

class UsuarioController {
    async index (req, res, next) {
        try {
          const usuario = req.body;

            const novoUsuario = await Usuario.create(usuario)
            res.send({usuario})

        } catch (e) {
            next(e)
        }
    }
}

module.exports = UsuarioController;