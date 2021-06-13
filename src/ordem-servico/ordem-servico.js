const { Schema } = require('mongoose');
const db = require('../database/db');

const OrdemServicoSchema = db.Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        required: [true, 'Usuario obrigatório']
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        // required: [true, 'Cliente obrigatório']
    },
    status: {
        type: String,
        required: [true, 'Status obrigatório']
    }
})

const OrdemServico = db.model('OrdemServico', OrdemServicoSchema);

module.exports = OrdemServico;