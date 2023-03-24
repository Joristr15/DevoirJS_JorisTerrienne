/* const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Serveur Démarré');
    res.end('Hello');

});

server.listen(3000); */

const express = require('express');
// const app = express.constructor();
const app = express();
let port = 3000;
const Films = require('./data/film')

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    
})

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/client/index.html');
});

app.get('/film',(req,res) => {
    res.send(Films);
})
