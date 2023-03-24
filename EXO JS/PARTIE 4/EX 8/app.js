//SELECTION
const divListe = document.querySelector('.liste1');

//CREATION
const ul = document.createElement('ul')

//AJOUT
divListe.appendChild(ul);

var texteUtilisateur = prompt("Entez une adresse internet")

while (texteUtilisateur != "Fin") {
    var lien = document.createElement('a');
    var li = document.createElement('li');
    ul.appendChild(li);
    li.appendChild(lien);
    lien.href = texteUtilisateur;
    lien.textContent = texteUtilisateur;
    texteUtilisateur = prompt("Entez une adresse internet")
}
