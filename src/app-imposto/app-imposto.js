const db = require('../database/db');
const { Schema } = require('mongoose');

const AppImpostoSchema = db.Schema({
    prod_serv: {
        type: Number,
        required: [true, "Prod Serv Obrigatório"]
    },
    imposto: {
        type: Schema.Types.ObjectId,
        ref: 'Imposto',
        required: [true, "Imposto obrigatório"]
    }
})

const AppImposto = Schema('app-imposto', AppImpostoSchema);

module.exports = AppImposto;