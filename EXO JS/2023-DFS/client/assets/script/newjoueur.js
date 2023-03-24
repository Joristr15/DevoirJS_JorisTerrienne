import { JoueurService } from "./joueur.service.js";
import { Joueur } from "./joueur.class.js";
let btnNew = document.querySelector('#newjoueur');
let F = new JoueurService();
var Ajout = document.querySelector('.Ajout');
var selectPays = document.querySelector('#selectPays');

btnNew.addEventListener('click', () => {
  let nom = document.querySelector('#nom');
  let prenom = document.querySelector('#prenom');
  let dateNaissance = document.querySelector('#dateNaissance');
  let club = document.querySelector('#club');
  let resume = document.querySelector('#resume');
  var selectPays = document.querySelector('#selectPays');
  var trophe = document.querySelector('#trophe');
  var championnat = document.querySelector('#championnat');
  var maillot = document.querySelector('#numeromaillot');

  let newJoueur = new Joueur('', nom.value, prenom.value, club.value, dateNaissance.value, championnat.value, selectPays.value, maillot.value, trophe.value, resume.value,);

  let promise = F.add(newJoueur);
  promise.then(() => {
    Ajout.innerHTML = nom.value + " " + prenom.value + " a bien été ajouté";
    Ajout.style.backgroundColor = "green";
    Ajout.style.color = "white";
    Ajout.style.display = "block";
    setTimeout(() => {
      Ajout.style.display = "none";
      nom.value = '';
      prenom.value = '';
      dateNaissance.value = '';
      club.value = '';
      resume.value = '';
  }, 3000);

  

  });
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
