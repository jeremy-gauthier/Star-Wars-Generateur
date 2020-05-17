// Appel de mes variables
let nom = document.getElementById('nom');
let episode = document.getElementById('episode');
let realisateur = document.getElementById('realisateur');
let resume = document.getElementById('resume');
let dateDeSortie = document.getElementById('dateDeSortie');
let image = document.getElementById('image')
let tableau = document.getElementById('tableau');
let url = "https://swapi.dev/api/films/";




// Ecouteurs
tableau.addEventListener('click', updatePage);

//Promesses
fetch(url).then((data)=> {
    data.json().then((data) => {
        tableau = data;
        console.log(tableau.results);
    })
})


function updatePage(){

    function random(min, max)
    {
        return Math.floor(Math.random() * (5 - 0 + 1)) + 0;
    }

    let id = random(0,5);

    function imgSelect(){
        if (tableau.results[id]["episode_id"] == "1") {
            image.setAttribute('src', "https://vignette.wikia.nocookie.net/fr.starwars/images/e/e0/Lundi.png/revision/latest?cb=20151011153017")
        }
        else if (tableau.results[id]["episode_id"] == "2") {
            image.setAttribute('src', "https://fr.web.img5.acsta.net/medias/nmedia/00/02/34/81/affclones.jpg")
        }
        else if (tableau.results[id]["episode_id"] == "3") {
            image.setAttribute('src', "https://fr.web.img3.acsta.net/medias/nmedia/18/35/53/23/18423997.jpg")
        }
        else if (tableau.results[id]["episode_id"] == "4") {
            image.setAttribute('src', "https://images-na.ssl-images-amazon.com/images/I/91H91NbI2xL._AC_SL1500_.jpg")
        }
        else if (tableau.results[id]["episode_id"] == "5") {
            image.setAttribute('src', "https://m.media-amazon.com/images/I/51nwJJf3IjL.jpg")
        }
        else if (tableau.results[id]["episode_id"] == "6"){
            image.setAttribute('src', "https://i.pinimg.com/originals/e6/91/d8/e691d863de57aed3067cae106d202174.jpg")
        }
        else 
        {}
    }


    nom.innerHTML = tableau.results[id]["title"];
    imgSelect(id);
    episode.innerText = "Episode n°" + tableau.results[id]["episode_id"];
    realisateur.innerText = "Réalisateur : " + tableau.results[id]["director"];
    resume.innerText = tableau.results[id]["opening_crawl"];
    dateDeSortie.innerHTML = "Date de sortie : " + tableau.results[id]["release_date"];
    


}



