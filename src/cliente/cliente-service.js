const jwt = require('jsonwebtoken');

class ClienteService {
    decodeJwt(token) {
        token = token.split(' ')[1]
        const cargo = jwt.decode(token).usuario.cargo;
        return cargo === 'ADMINISTRADOR'
    }
}

module.exports = ClienteService;