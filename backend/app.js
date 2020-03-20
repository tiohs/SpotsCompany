const express = require('express');
const routes = require('./src/routes');
const db = require('./config/db')();

const app = express();
app.use(express.json())
app.use(routes);



app.listen('3333', () => {
    console.log('Olá mundo !');
});