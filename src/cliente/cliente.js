const db = require('../database/db');

const ClienteSchema = db.Schema({
    nome: {
        type: String,
        required: [true, 'Nome do cliente obrigatório']
    },
    cpf: {
        type: String,
        required: [true, 'CPF do cliente obrigatório']
    },
    nascimento: {
        type: Date,
        required: [true, 'Data de nascimento do cliente obrigatório']
    },
    email: {
        type: String,
        required: [true, 'Email do cliente obrigatório']
    },
    telefone: {
        type: String,
        required: [true, 'Telefone do cliente obrigatório']
    },
    status: {
        type: String,
        required: [true, 'Status do cliente obrigatório']
    }
})


const Cliente = db.model('Cliente', ClienteSchema);

module.exports = Cliente;