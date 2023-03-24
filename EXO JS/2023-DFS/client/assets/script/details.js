import { JoueurService } from './joueur.service.js';
import { Joueur } from './joueur.class.js';

let nom = document.querySelector('#nom');
let prenom = document.querySelector('#prenom');
let dateNaissance = document.querySelector('#dateNaissance');
let club = document.querySelector('#club');
let resume = document.querySelector('#resume');
let title = document.querySelector('#title');
var selectPays = document.querySelector('#selectPays');
var trophe = document.querySelector('#trophe');
var championnat = document.querySelector('#championnat');
var maillot = document.querySelector('#numeromaillot');

let myId = window.location.hash.substring(1);

let F = new JoueurService();
let myJoueur = F.get(myId);
myJoueur.then((elt) => {

  title.innerText = elt.prenom + " " + elt.nom;
  nom.value = elt.nom;
  prenom.value = elt.prenom;
  club.value = elt.club;
  dateNaissance.value = elt.dateNaissance;
  championnat.value = elt.championnat
  resume.value = elt.synopsis;
  trophe.value = elt.nombreTrophe
  maillot.value = elt.numeroMaillot


for (let i = 0; i < selectPays.options.length; i++) {
  if (selectPays.options[i].text === elt.nationalite) {
    selectPays.options[i].selected = true;
    break;
  }
}
});

let modif = document.querySelector('#modif');
modif.addEventListener('click', () => {
  console.log(nom.value);
  let tmp = new Joueur(myId, nom.value, prenom.value, club.value, dateNaissance.value, championnat.value, selectPays.value, maillot.value, trophe.value, resume.value,);
  F.modif(tmp);
  window.location.href = `/?myId=${myId}`;
});

const paysEuropeens = [
  {nom: "Allemagne" },  
  {nom: "Autriche" },  
  { nom: "Belgique" },  
  { nom: "Croatie" },  
  { nom: "Espagne" },  
  { nom: "Finlande" },  
  { nom: "France" },  
  { nom: "Grèce" },  
  { nom: "Hongrie" },  
  { nom: "Islande" }, 
  { nom: "Irlande" },  
  { nom: "Italie" },  
  { nom: "Luxembourg" },  
  { nom: "Norvège" },  
  { nom: "Pays-Bas" },  
  { nom: "Pologne" },  
  { nom: "Portugal" },  
  { nom: "République tchèque" },  
  { nom: "Roumanie" },  
  { nom: "Russie" }, 
  { nom: "Suède" },  
  { nom: "Suisse" }, 
  { nom: "Turquie" },  
  { nom: "Ukraine" }  
];

//COMBO PAYS
paysEuropeens.forEach(pays => {
    const option = document.createElement('option');
    option.text = pays.nom;
    selectPays.add(option);
});
const fleche = document.querySelector(".fleche");

fleche.addEventListener("click", function() {
  selectPays.parentNode.classList.toggle("rotate");
});




