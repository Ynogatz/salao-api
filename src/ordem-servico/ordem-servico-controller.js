const OrdemServico = require('./ordem-servico');
const jwt = require('jsonwebtoken');

class OrdemServicoController {

    async list(req, res, next) {
        try {
            const lista = await OrdemServico.find();

            res.send({ lista }).status(200);
        } catch (e) {
            next(e)
        }
    }

    async listByLoggedUser(req, res, next) {
        const token = req.headers.authorization.split(' ')[1];
        const tokenDecoded = jwt.decode(token);
        const userId = tokenDecoded.usuario._id;

        const lista = await OrdemServico.find({ usuario: userId })

        res.send(lista)
    }


    async listByUser(req, res, next) {
        try {
            const userId = req.body.id;

            const lista = await OrdemServico.find({ usuario: userId })

            res.send(lista)
        } catch (e) {
            next(e)
        }
    }

    async create(req, res, next) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const tokenDecoded = jwt.decode(token);
            const userId = tokenDecoded.usuario._id;

            const body = req.body;

            body.usuario = userId

            OrdemServico.create(body);

            res.send("Nova ordem cadastrada com sucesso!").status(200)
        } catch (e) {
            next(e)
        }
    }

}

module.exports = OrdemServicoController;