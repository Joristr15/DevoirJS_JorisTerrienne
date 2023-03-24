import { JoueurService } from "./joueur.service.js";
import { Joueur } from "./joueur.class.js";
let btnNew = document.querySelector('#newjoueur');
let F = new JoueurService();
var Ajout = document.querySelector('.Ajout');

btnNew.addEventListener('click', () => {
  let nom = document.querySelector('#nom');
  let prenom = document.querySelector('#prenom');
  let dateNaissance = document.querySelector('#dateNaissance');
  let club = document.querySelector('#club');
  let resume = document.querySelector('#resume');
  let newJoueur = new Joueur('', nom.value, prenom.value, dateNaissance.value, club.value, resume.value);
  let promise = F.add(newJoueur);
  
  promise.then(() => {

    Ajout.innerHTML = "Le joueur" + " " + nom.value + " a bien été ajouté";
    Ajout.style.backgroundColor = "green";
    Ajout.style.color = "white";

    setTimeout(() => {
      Ajout.style.display = "none";
    }, 3000);

    nom.value = '';
    prenom.value = '';
    dateNaissance.value = '';
    club.value = '';
    resume.value = '';

  });
});