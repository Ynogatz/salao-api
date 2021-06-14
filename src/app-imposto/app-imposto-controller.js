const AppImposto = require('./app-imposto')

class AppImpostoController {
    async index(req, res, next) {
        try {
            const appImposto = await AppImposto.find();
            res.send(appImposto);
        } catch (e) {
            next(e)
        }
    }
    async create(req, res, next) {
        try {
            const body = req.body;
            const appImposto = await AppImposto.create(body)
            res.send(appImposto)
        } catch (e) {
            next(e)
        }
    }

    async update(req, res, next) {
        try {
            const id = req.query.id;

            const body = req.body;
            body.id = id;
            const appImposto = await AppImposto.findOneAndUpdate(body)
            res.send(appImposto)
        } catch (e) {
            next(e)
        }
    }

    async destroy(req, res, next) {
        try {
            const id = req.query.id;
            const appImposto = await appImposto.findByIdAndRemove(id)
            res.send(appImposto)
        } catch (e) {
            next(e)
        }
    }
}


module.exports = AppImpostoController;