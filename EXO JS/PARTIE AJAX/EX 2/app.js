var btn = document.querySelector('.btn');
const div = document.querySelector('.users');


btn.addEventListener("click", play);

function play() {
        setTimeout(() => {
            let myHeaders = new Headers;
            let url = 'data/users.json';
            let options = {
                method: 'GET',
                headers: myHeaders,
                mode: 'cors',
                cache: 'default'
            }

            fetch(url, options)
                .then((res) => {
                    if (res.ok) {
                        return res.json()
                    }
                })
                .then((response) => {
                    response.forEach(utilisateur => {
                        const paragraphe = document.createElement('p')
                        div.appendChild(paragraphe);
                        paragraphe.textContent = "Nom: " + utilisateur.nom + " - Prenom: " + utilisateur.prenom + ' -  Email: ' + utilisateur.email
                    });
                })
        }, 3000);

}

