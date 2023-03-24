var btn1 = document.querySelector('.btn');
var texte = document.querySelector('.nb-clic');
btn1.addEventListener("click",play);
function play() {
    var prenom = document.querySelector("#prenom").value;
    var nom = document.querySelector("#nom").value;
    var dateNaissanceinput = document.querySelector("#dns");
    
    var dateNaissance = new Date(dateNaissanceinput.value);
    var age = Math.floor((Date.now() - dateNaissance) / (1000 * 60 * 60 * 24 * 365));
    texte.innerHTML = "Bonjour " + nom + " " + prenom + " vous avez " + age + " ans";

}

