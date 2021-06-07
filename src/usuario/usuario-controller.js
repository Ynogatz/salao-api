const Usuario = require('./usuario')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth')

function generateToken(params) {
    return jwt.sign({ usuario: params }, authConfig.secret, {
        expiresIn: 86400
    })
}

class UsuarioController {
    async index(req, res, next) {
        try {
            const usuarios = await Usuario.find();
            res.send(`
            <h1>Página inicial da aplicação</h1>
            <h3>Lista de usuários</h3>
            ${usuarios}
        `)
        } catch (e) {
            next(e)
        }
    }


    async create(req, res, next) {
        try {
            const usuario = req.body;

            const novoUsuario = await Usuario.create(usuario)
            novoUsuario.senha = undefined;
            res.send({ novoUsuario }).status(200)
        } catch (e) {
            next(e)
        }
    }

    async autenticacao(req, res, next) {
        try {
            const { login, senha } = req.body;

            const usuario = await Usuario.findOne({ login }).select('+senha')

            if (!usuario) return res.status(400).send({ erro: "Usuário não encontrado" })

            if (!await bcrypt.compare(senha, usuario.senha)) return res.status(400).send({ erro: "Senha inválida" })

            usuario.senha = undefined

            res.send({
                usuario,
                token:generateToken(usuario)
            }).status(200)

        } catch (erro) {
            next({ erro })
        }
    }


}
module.exports = UsuarioController;