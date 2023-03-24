//
const container = document.querySelector('.container');
var btn1 = document.querySelector('.btn').addEventListener("click",play);

//RECUPERE L'EVENEMENT SUR LE BOUTON ET LANCE LA FONCTION PLAY

function play() {
    var C1   = document.querySelector("#C1").value;
    var C2   = document.querySelector("#C2").value;
    var C3   = document.querySelector("#C3").value;
    if (C1 > 255 || C1 < 0 || C2 > 255 || C2 < 0 || C3 > 255 || C3 < 0) {
        alert("Nombre compris entre 0 et 255 svp")
    }else {
        container.style.backgroundColor = "rgb(" + C1 + "," + C2 + "," + C3 + ")";
    };


}
