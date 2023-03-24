
var CouleurFond     = prompt("Entrez une couleur de fond : ");
var CouleurTexte    = prompt("Entrez une couleur de texte : ");
var Texte           = prompt("Entrez un texte : ");
var panneau         = document.querySelector('.Panneau')

panneau.style.backgroundColor = CouleurFond;
panneau.style.color = CouleurTexte
panneau.textContent = Texte;


