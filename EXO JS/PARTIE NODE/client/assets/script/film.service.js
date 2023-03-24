export class FilmService {
    constructor() {

    }

    getAll(target) {
        let myHeaders = new Headers();
        let url = '/film';
        let options = {
            method: 'GET',
            headers: myHeaders,
        };

        return fetch(url,option)
            .then((res) => {
                if(res.ok) {
                    return res.json();
                }
            })
            .then((response) => {
                response.forEach(elt => {
                    let myFilm = document.createElement('tr');
                    let myTitle = document.createElement('td');
                    myTitle.innertexte = elt.nom;
                    let myModif = document.createElement('td');
                    let myDelete = document.createElement('td');
                })
                return response;
            })
            .catch((error) => {
                console.log(`Error : $(error}`);
            });

    }
}