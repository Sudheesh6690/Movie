const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '52953b28fdmsh78e71a4d476e7ccp1a1807jsnf9a3fda26853',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
};

function search() {
    const moviename = document.getElementById('MovieName').value;

    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${moviename}`, options)
        .then(response => response.json())
        .then(data => {
            const list = data.d;
            document.querySelector(".movies").innerHTML = "";

            list.map((item) => {
                const name = item.l;
                const poster = item.i.imageUrl;
                const movie = `
                    <div class="col-md-4 col-sm-6 mb-4 ">
                        <div class="card h-100 bg-secondary">
                            <img src="${poster}" class="card-img-top " alt="${name} poster">
                            <div class="card-body text-center">
                                <h5 class="card-title text-white

">${name}</h5>
                            </div>
                        </div>
                    </div>`;
                document.querySelector(".movies").innerHTML += movie;
            });
        })
        .catch(err => {
            console.error(err);
        });
}