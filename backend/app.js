const express = require('express');
const routes = require('./src/routes');
const cors = require('cors');
const path = require('path');

const db = require('./config/db')();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, 'uploads')))
app.use(routes);



app.listen('3333', () => {
    console.log('Olá mundo !');
});