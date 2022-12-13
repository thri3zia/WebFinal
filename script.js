const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/', (req, res) => {
    res.send('Hello World! POST!');
});

app.patch('/', (req, res) => {
    res.send('Hello World! PATCH!');
});

app.delete('/', (req, res) => {
    res.send('Hello World! DELETE');
});

const server = app.listen(3000,() => {
    console.log('Server running at http://localhost:3000/');
});