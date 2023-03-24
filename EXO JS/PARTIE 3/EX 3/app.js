//VARIABLE DE NOMBRE DE PX MOUVEMENT
var Mvmt = 20;

//RECUPERATION PETIT CARRE
const carre2 = document.querySelector('.carre2');

//POSITION DU PETIT CARRE
var PetitCarreTop = carre2.offsetHeight
var PetitCarreLeft = carre2.offsetWidth

//RECUPERATION GRAND CARRE
const carre = document.querySelector('.carre');
const topPosition = carre.offsetHeight
const leftPosition = carre.offsetWidth



document.addEventListener('keydown', function(event) {

    if (event.key === 'ArrowRight') {
      const currentPosition = carre2.offsetLeft;
      if (currentPosition + Mvmt + PetitCarreLeft <= leftPosition) {
      carre2.style.left = currentPosition + Mvmt + 'px';
      }
    }
    if (event.key === 'ArrowLeft') {
        const currentPosition = carre2.offsetLeft;
        if (currentPosition  > 0 ) {
            carre2.style.left = currentPosition - Mvmt + 'px';
        }
    }
    if (event.key === 'ArrowUp') {
        const currentPosition = carre2.offsetTop;
        if (currentPosition  > 0 ) {
            carre2.style.top = currentPosition - Mvmt + 'px';
        }
    }
    if (event.key === 'ArrowDown') {
        const currentPosition = carre2.offsetTop;
        if (currentPosition + PetitCarreTop < topPosition) {
            carre2.style.top = currentPosition + Mvmt + 'px';
        }
    };
  })
