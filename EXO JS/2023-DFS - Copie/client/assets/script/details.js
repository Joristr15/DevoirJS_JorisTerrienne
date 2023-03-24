import { JoueurService } from './joueur.service.js';
import { Joueur } from './joueur.class.js';

let nom = document.querySelector('#nom');
let prenom = document.querySelector('#prenom');
let dateNaissance = document.querySelector('#dateNaissance');
let club = document.querySelector('#club');
let resume = document.querySelector('#resume');
let title = document.querySelector('#title');
var Ajout = document.querySelector('.Ajout');

let myId = window.location.hash.substring(1);

let F = new JoueurService();
let myJoueur = F.get(myId);

myJoueur.then((elt) => {
  title.innerText =elt.prenom + " " + elt.nom;
  nom.value = elt.nom;
  prenom.value = elt.prenom;
  club.value = elt.club;
  dateNaissance.value = elt.dateNaissance;
  resume.value = elt.synopsis;

  let modif = document.querySelector('#modif');
  modif.addEventListener('click', () => {
    let tmp = new Joueur(elt._id,nom.value, prenom.value, dateNaissance.value, club.value, resume.value);
    Ajout.innerHTML = "Le joueur" + " " + nom.value + " a bien été modifié";
    Ajout.style.backgroundColor = "orange";
    Ajout.style.color = "white";

    setTimeout(() => {
      Ajout.style.display = "none";
    }, 3000);
    F.modif(tmp);
  });
});

