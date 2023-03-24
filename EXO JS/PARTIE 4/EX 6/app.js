// Sélection de la div footer
const footer = document.querySelector('.footer');

// Création de l'élément footer
const newFooter = document.createElement('footer');

// Ajout de l'élément footer dans la div footer
footer.appendChild(newFooter);

// Ajout du texte de copyright dans le footer
newFooter.innerHTML = "&copy; 2023 Mon Entreprise";

// Changement du style du footer pour le centrer
newFooter.style.textAlign = 'center';