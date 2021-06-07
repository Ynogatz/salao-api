const Cliente = require('./cliente');

class ClienteController {
    async index(req, res, next) {
        try {
            const clientes = await Cliente.find();
            res.send(clientes);
        } catch (e) {
            next(e)
        }
    }
    async create(req, res, next) {
        try {
            const body = req.body;
            const novoCliente = await Cliente.create(body)
            res.send(novoCliente)
        } catch (e) {
            next(e)
        }
    }

    async update(req, res, next) {
        try {
            const id = req.params.id;

            const body = req.body;
            body.id = id;
            const attCliente = await Cliente.findOneAndUpdate(body)
            res.send(attCliente)
        } catch (e) {
            next(e)
        }
    }

    async destroy(req, res, next) {
        try {
            const id = req.params.id;
            const deleteCliente = await Cliente.findByIdAndRemove(id)
            res.send(deleteCliente)
        } catch (e) {
            next(e)
        }
    }


}

module.exports = ClienteController;