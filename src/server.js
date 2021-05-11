require('dotenv').config();
const express = require('express');
const app = require('./app');
const SERVER_PORT = process.env.PORT || 3000;
const morgan = require('morgan');
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

app.use('/', routes)


app.listen(SERVER_PORT, () => {
    console.log(`Aplicação rodando na porta: ${SERVER_PORT}`)
})