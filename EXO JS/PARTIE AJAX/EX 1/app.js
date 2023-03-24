var btn = document.querySelector('.btn');
var div = document.querySelector('.citation')

btn.addEventListener("click", play);

function play() {
        setTimeout(() => {
            let myHeaders = new Headers;
            let url = 'data/citations.txt';
            let options = {
                method: 'GET',
                headers: myHeaders,
                mode: 'cors',
                cache: 'default'
            }

            fetch(url, options)
                .then((res) => {
                    if (res.ok) {
                        return res.text()
                    }
                })
                .then((response) => {
                    div.innerHTML = response;
                })
        }, 3000);

}

