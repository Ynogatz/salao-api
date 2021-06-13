const Usuario = require('./usuario')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth')
const UsuarioService = require('./usuario-service');
const usuarioService = new UsuarioService;

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
            <h1>Página da aplicação</h1>
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
            res.send(`Usuário ${novoUsuario.nome} criado com sucesso!`).status(200)
        } catch (e) {
            next(e)
        }
    }

    async autenticacao(req, res, next) {
        try {
            const { login, senha } = req.body;

            if (usuarioService.verificaCampos(login, senha)) {
                const usuario = await Usuario.findOne({ login }).select('+senha')

                if (!usuario) return res.status(400).send({ erro: "Usuário não encontrado" })

                if (!await bcrypt.compare(senha, usuario.senha)) return res.status(400).send({ erro: "Senha inválida" })

                usuario.senha = undefined


                res.send({
                    token: generateToken(usuario)
                }).status(200)
            } else res.send({ erro: 'Login e senha devem ser preenchidos' }).status(400)


        } catch (erro) {
            next({ erro })
        }
    }

    teste(req, res, next) {
        let token = req.headers.authorization

        token = token.split(' ')[1]

        const userData = jwt.decode(token)

        res.send(userData.usuario.senha)
    }

}
module.exports = UsuarioController;