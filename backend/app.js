const express = require('express');

const app = express();

app.get('/', (req, res)=> {
    res.json({'Moto' : 'DT'})
});

app.listen('3333', () => {
    console.log('Olá mundo !');
});