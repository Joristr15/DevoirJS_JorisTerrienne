const express = require('express');
const app = express();
let port = 3000;
const Joueurs = require('./data/joueurs');
const _ = require('lodash');
const { v4: uuidv4 } = require('uuid');

app.use('/assets', express.static('./client/assets'));
app.use('/pages', express.static('./client/pages'));
app.use(express.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

app.get('/joueur', (req, res) => {
  res.send(Joueurs);
});

app.get('/joueur/:id', (req, res) => {
  let id = req.params.id;
  let joueur = _.find(Joueurs, (o) => {
    return o._id == id;
  });
  res.send(joueur);
});

app.put('/joueur/:id', (req, res) => {
  let id = req.params.id;
  let index = _.findIndex(Joueurs, (o) => {
    return o._id == id;
  });
  Joueurs[index] = req.body;
  res.sendStatus(200);
});

app.post('/joueur', (req, res) => {
  let newJoueur = req.body;
  newJoueur._id = uuidv4();
  Joueurs.push(newJoueur);
  res.sendStatus(200);
});

app.delete('/joueur/:id', (req, res) => {
  let id = req.params.id;
  let index = _.findIndex(Joueurs, (o) => {
    return o._id == id;
  });
  Joueurs.splice(index, 1);
  res.sendStatus(200);
});