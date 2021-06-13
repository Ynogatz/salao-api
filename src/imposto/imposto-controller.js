const Imposto = require('./imposto');

class ImpostoController {
    async index(req, res, next) {
        try {
            const imposto = await Imposto.find();
            res.send(imposto);
        } catch (e) {
            next(e)
        }
    }
    async create(req, res, next) {
        try {
            const body = req.body;
            const imposto = await Imposto.create(body)
            res.send(imposto)
        } catch (e) {
            next(e)
        }
    }

    async update(req, res, next) {
        try {
            const id = req.params.id;

            const body = req.body;
            body.id = id;
            const imposto = await Imposto.findOneAndUpdate(body)
            res.send(imposto)
        } catch (e) {
            next(e)
        }
    }

    async destroy(req, res, next) {
        try {
            const id = req.params.id;
            const imposto = await Imposto.findByIdAndRemove(id)
            res.send(imposto)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = ImpostoController;