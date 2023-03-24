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
        response.forEach(elt => {
          let myJoueur = document.createElement('tr');

          let myTitle = document.createElement('td');
          myTitle.innerText = elt.nom + " " + elt.prenom;

          let myClub = document.createElement('td');
          myClub.innerText = elt.club;

          let myDateNaissance = document.createElement('td');
          myDateNaissance = elt.dateNaissance;
          let myDiv = document.createElement('div');
          let myIcone3 = document.createElement('i');
          myIcone3.classList.add('fas', 'fa-birthday-cake');
          myDiv.appendChild(myIcone3);
          let myDateNaissanceTexte = document.createTextNode(' ' + myDateNaissance);
          myDiv.appendChild(myDateNaissanceTexte)

          let myModif = document.createElement('td');
          let myIcone = document.createElement('i');
          myIcone.classList.add('fas','fa-light', 'fa-pencil');
          let myLinkToDetails = document.createElement('a');
          myLinkToDetails.setAttribute('href', './pages/details.html#' + elt._id);
          myLinkToDetails.appendChild(myIcone);
          myModif.appendChild(myLinkToDetails);
          myModif.style.textAlign = 'center';


          let myDelete = document.createElement('td');
          let btnDelete = document.createElement('button');
          let myIcone2 = document.createElement('i');
          myIcone2.classList.add('fas', 'fa-times')
          btnDelete.classList.add('btn', 'btn-outline-danger');
          myDelete.style.textAlign = 'center';
          myDelete.appendChild(btnDelete);
          btnDelete.appendChild(myIcone2);
          btnDelete.addEventListener('click', () => {
            this.remove(elt._id);
          });

          target.appendChild(myJoueur);
          myJoueur.appendChild(myTitle);
          myJoueur.appendChild(myClub);
          myJoueur.appendChild(myDiv);
          myJoueur.appendChild(myModif);
          myJoueur.appendChild(myDelete);
          myJoueur.style.textAlign = 'center';
          myJoueur.style.verticalAlign = 'center';


        });
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
        let tmp = new Joueur(resource._id, resource.nom, resource.prenom, resource.dateNaissance, resource.club, resource.synopsis);
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
          autorisation = "1"

        }
      })
      .catch((error) => {
        console.log(`Error : ${error}`);
      });
  }
};

/* if (autorisation = "1"){
  var Ajout = document.querySelector('.Ajout');
Ajout.innerHTML = "Le joueur a bien été supprimé";
Ajout.style.backgroundColor = "red";
Ajout.style.color = "white";
setTimeout(() => {
Ajout.style.display = "none";}, 3000);
autorisation = 0;
}; */

