const db = require('../database/db');

const ImpostoSchema = db.Schema({
    descricao: {
        type: String,
        required: [true, "Descricao obrigório"]
    },
    aliquota: {
        type: Number,
        required: [true, "Aliquota obrigatório"]
    }
})

const Imposto = db.model('Imposto', ImpostoSchema);

module.exports = Imposto;