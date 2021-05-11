require('dotenv').config();
const MONGO_URL = process.env.MONGO_URL;
const db = require('mongoose');

db.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com banco de dados estabelecida com sucesso!")
}).catch((erro) => {
    console.log({ erro })
})

module.exports = db;