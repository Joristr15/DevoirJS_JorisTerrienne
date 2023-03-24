import { Joueur } from "./Joueur.class.js";


export class JoueurService {
  constructor() {

  }

  /**
   * Récupère l'ensemble des données et les ajoutent dans le DOM
   * @param {DOM} target - localisation dans le dom
   * @return {Array<Joueur>}
   */
  getAll(target) {
    let myHeaders = new Headers();
    let url = '/Joueur';
    let options = {
      method: 'GET',
      headers: myHeaders
    };

    return fetch(url, options)
      .then((res) => {
        if(res.ok) {
          return res.json();
        }
      })
      .then((response) => {
        var idModifier = 0;
        response.forEach(elt => {

          //ID JOUEUR - INVISIBLE
          let myJoueur = document.createElement('tr');
          let myId = document.createElement('td');
          myId.innerText = elt._id; 
          myId.classList.add('invisible');

          // AJOUT BACKGROUND SI JOUEUR VIENT D'ETRE MODIF
          var urlParams = new URLSearchParams(window.location.search);
          var idParam = urlParams.get("myId");
          if (idParam == elt._id) {
            myJoueur.classList.add('MODIF');
            idModifier = idParam;
          }
      
          //NOM + PRENOM
          let myTitle = document.createElement('td');
          myTitle.innerText = elt.nom + " " + elt.prenom;
  
          //CLUB
          let myClub = document.createElement('td');
          myClub.innerText = elt.club;

          //CHAMPIONNAT
          let myChampionat = document.createElement('td');
          myChampionat.innerText = elt.championnat;

          //PAYS
          let myImg = document.createElement('img');
          myImg.src = `assets/img/${elt.nationalite}.png`;

          //NUMERO DE MAILLOT
          let myNumeroMaillot = document.createElement('td');
          myNumeroMaillot.innerText = "N°" + elt.numeroMaillot;

          //NOMBRE TROPHEES
          let myNombreTrophe = document.createElement('td');
          myNombreTrophe.innerText = elt.nombreTrophe;
          let myDiv2 = document.createElement('div');
          let myIcone4 = document.createElement('i');
          myIcone4.classList.add('fas', 'fa-trophy');
          myDiv2.appendChild(myIcone4);
          let myTropheTexte = document.createTextNode(' ' + elt.nombreTrophe);
          myDiv2.appendChild(myTropheTexte);

          //DATE DE NAISSANCE
          let myDateNaissance = document.createElement('td');
          myDateNaissance = elt.dateNaissance;
          let myDiv = document.createElement('div');
          let myIcone3 = document.createElement('i');
          myIcone3.classList.add('fas', 'fa-birthday-cake');
          myDiv.appendChild(myIcone3);
          let myDateNaissanceTexte = document.createTextNode(' ' + myDateNaissance);
          myDiv.appendChild(myDateNaissanceTexte);
          
          //BOUTON MODIFIER
          let myModif = document.createElement('td');
          let btnModif = document.createElement('button');
          let myIcone = document.createElement('i');
          myIcone.classList.add('fas','fa-light', 'fa-pencil');
          btnModif.classList.add('btn', 'btn-outline-primary', 'button5');
          let myLinkToDetails = document.createElement('a');
          myLinkToDetails.setAttribute('href', './pages/details.html#' + elt._id);
          btnModif.appendChild(myIcone);
          myLinkToDetails.appendChild(btnModif);
          myModif.appendChild(myLinkToDetails);
          myModif.style.textAlign = 'center';

          //BOUTON SUPPRIMER
          let myDelete = document.createElement('td');
          let btnDelete = document.createElement('button');
          let myIcone2 = document.createElement('i');
          myIcone2.classList.add('fas', 'fa-times')
          btnDelete.classList.add('btn', 'btn-outline-danger', 'button5');
          myDelete.style.textAlign = 'center';
          myDelete.appendChild(btnDelete);
          btnDelete.appendChild(myIcone2);
          btnDelete.addEventListener('click', () => {
            this.remove(elt._id);
          });

          target.appendChild(myJoueur);
          myJoueur.appendChild(myId)
          myJoueur.appendChild(myTitle);
          myJoueur.appendChild(myImg);
          myJoueur.appendChild(myClub);
          myJoueur.appendChild(myChampionat);
          myJoueur.appendChild(myDiv2);
          myJoueur.appendChild(myNumeroMaillot);
          myJoueur.appendChild(myDiv);
          myJoueur.appendChild(myModif);
          myJoueur.appendChild(myDelete);
          myJoueur.style.textAlign = 'center';
          myJoueur.style.verticalAlign = 'center';


        });
        var urlParams = new URLSearchParams(window.location.search);
        var idParam = urlParams.get("myId");
  
        if (idParam ==! null) {
          setTimeout(() => {
            const maTable = document.getElementById("myTable");
            const premiereLigne = maTable.getElementsByTagName("tr")[idParam];
            premiereLigne.classList.remove("MODIF");
          
          }, 3000);
        }
        return response;
      })
      .catch((error) => {
        console.log(`Error : ${error}`);
      });
    }
    
    /**
     * Renvoie le Joueur correspondant à l'identifiant
     * @param {String} id - _id du Joueur concerné
     * @return {Joueur}
    */
   get(id) {
     let myHeaders = new Headers();
     let url = '/Joueur/' + id;
     let options = {
       method: 'GET',
       headers: myHeaders
      };
      
      return fetch(url, options)
      .then((res) => {
        if(res.ok) {
          return res.json();
        }
      })
      .then((resource) => {
        let tmp = new Joueur(resource._id, resource.nom, resource.prenom,resource.club, resource.dateNaissance,resource.championnat,resource.nationalite, resource.numeroMaillot,resource.nombreTrophe,resource.synopsis);
        console.log(tmp)
        return tmp;
      })
      .catch((error) => {
        console.log(`Error : ${error}`);
      });
      
  }

  /**
   * Modifie le Joueur passé en paramètre
   * @param {String} Joueur 
   */
  modif(Joueur) {
    console.log("TEST")
    let url = '/Joueur/' + Joueur._id;
    let options = {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(Joueur)
    };

    return fetch(url, options)
      .then((res) => {
        if(res.ok) {
          console.log('reussi')
        }
      })
      .catch((error) => {
        console.log(`Error : ${error}`);
      });
  }

  /**
   * Ajoute un novueau Joueur à la collection
   * @param {Joueur} Joueur 
   */
  add(Joueur) {
    let url = '/Joueur';
    let options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(Joueur)
    };

    return fetch(url, options)
      .then((res) => {
        if(res.ok) {
          console.log('Joueur Ajouté');
        }
      })
      .catch((error) => {
        console.log(`Error : ${error}`);
      });
  }

  
  remove(id) {
    let url = '/Joueur/' + id;
    let myHeaders = new Headers();
    let options = {
      method : 'DELETE', 
      headers: myHeaders
    };

    return fetch(url, options)
      .then((res) => {
        if(res.ok) {
          console.log('Réussi');
          location.reload();


        }
      })
      .catch((error) => {
        console.log(`Error : ${error}`);
      });
  };

};

/* if (idModifier > 0){
setTimeout(() => {
      const maTable = document.getElementById("myTable");
      const premiereLigne = maTable.getElementsByTagName("tr")[idModifier];
      premiereLigne.classList.remove("MODIF");
    
    }, 3000);
  } */