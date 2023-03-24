var Titre1 = document.querySelector('.Titre1').addEventListener("click",ChangeStyle1);
var Titre2 = document.querySelector('.Titre2').addEventListener("click",ChangeStyle2);
var Titre3 = document.querySelector('.Titre3').addEventListener("click",ChangeStyle3);


function ChangeStyle1() {
    var Contenu1 = document.querySelector('.Contenu1').style.display = "block";
    var Contenu2 = document.querySelector('.Contenu2').style.display = "none";
    var Contenu3 = document.querySelector('.Contenu3').style.display = "none";
}

function ChangeStyle2() {
    var Contenu1 = document.querySelector('.Contenu1').style.display = "none";
    var Contenu2 = document.querySelector('.Contenu2').style.display = "block";
    var Contenu3 = document.querySelector('.Contenu3').style.display = "none";
}

function ChangeStyle3() {
    var Contenu1 = document.querySelector('.Contenu1').style.display = "none";
    var Contenu2 = document.querySelector('.Contenu2').style.display = "none";
    var Contenu3 = document.querySelector('.Contenu3').style.display = "block";
}