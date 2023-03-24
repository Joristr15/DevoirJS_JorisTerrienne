var btn1 = document.querySelector('#btn-clic');
var texte = document.querySelector('.nb-clic');
var i = 1
btn1.addEventListener("click",play);
function play() {
    if (i > 1){
        texte.innerHTML = "Vous avez fait " + i + " clics";
    }else {
        texte.innerHTML = "Vous avez fait seulement " + i + " clic"
    }
    i++;
}

