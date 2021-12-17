let categoryContainer = document.querySelector("#nav-categorie");
let input = document.querySelector("#cerca-nav-yt");
let button = document.querySelector("#cerca-btn");
let categoryDiv = document.querySelector(".category-div");
let videoContainer = document.querySelector(".video-container");
let mainContainer = document.querySelector("main");
let numeroVideo = 0;

function createCategory(category) {
    let newDiv = document.createElement("div");
    newDiv.textContent = category;
    categoryContainer.appendChild(newDiv);
    newDiv.classList.add("category-div");
}

button.addEventListener("click", function() {
    if (input.value != "") {
        createCategory(input.value);
        input.value = "";
    } else {
        createCategory("prova a inserire qualcosa nella ricerca :)");
        input.value = "";
    }
});

function getNavHeight() {
    let navHeight = document.querySelector("nav").offsetHeight;
    console.log(navHeight);
    document.documentElement.style.setProperty("--navAllHeight", navHeight + "px");
}

getNavHeight();


function createVideo( /* titolo, nomeCanale, numeroViews */ ) {
    // copia il codice html
    let videoComponent = videoContainer.cloneNode(true);

    let randomNumber = Math.floor(Math.random() * 1000);
    numeroVideo += 1;

    videoComponent.querySelector(".video-title").textContent = "titolo Video " + numeroVideo;
    videoComponent.querySelector(".video-name-channel").textContent = "Canale Youtube " + numeroVideo;
    videoComponent.querySelector(".video-views").textContent = randomNumber + " visualizzazioni";
    if (randomNumber > 900) {
        videoComponent.querySelector(".video-views").classList.add("trending-video");
        document.querySelector("style").innerHTML = ".trending-video:after, .trending-video:before {content: ' 🔥 '; text-shadow: 0 0 1em red;}";
    } else {
        videoComponent.querySelector(".video-views").classList.remove("trending-video");
    }
    mainContainer.appendChild(videoComponent);
}
for (let index = 0; index < 20; index++) {
    createVideo();
}

window.addEventListener("scroll", function() {
    let scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    console.log(scrollPercentage);
    if (scrollPercentage > 90) {
        createVideo();
    } else if (scrollPercentage > 70 && scrollPercentage < 90) {}
});