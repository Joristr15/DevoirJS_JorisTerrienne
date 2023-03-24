import { JoueurService } from './joueur.service.js';

let tbody = document.querySelector('#listJoueur');
const Joueur = new JoueurService();
Joueur.getAll(tbody);
