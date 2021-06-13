const jwt = require('jsonwebtoken');

class UsuarioService {
    verificaCampos(login, senha) {
        return (!!login || !!senha)
    }
}

module.exports = UsuarioService;