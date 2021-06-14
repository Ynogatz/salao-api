const db = require('../database/db');
const bcrypt = require('bcrypt');

const UsuarioSchema = new db.Schema({
    nome: {
        type: String,
        minLength: [3, "Nome deve conter pelo menos 4 digitos"],
        required: [true, "Nome obrigatório"]
    },
    login: {
        type: String,
        minLength: [5, "Login deve conter pelo menos 5 digitos"],
        required: [true, "Login obrigatório"],
        // unique: [true, "Este usuário já está em uso"]
    },
    email: {
        type: String,
        minLength: [5, "Email deve conter pelo menos 5 digitos"],
        required: [true, "Email obrigatório"],
        // unique: [true, "Este email já está em uso"]
    },
    senha: {
        type: String,
        minLength: [5, "Senha deve conter pelo menos 5 digitos"],
        required: [true, "Senha obrigatório"],
    }
})

UsuarioSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;
    next();

})

const Usuario = db.model('usuario', UsuarioSchema);

module.exports = Usuario