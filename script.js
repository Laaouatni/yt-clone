let categoryContainer = document.querySelector("#nav-categorie");
let input = document.querySelector("#cerca-nav-yt");
let button = document.querySelector("#cerca-btn");
let categoryDiv = document.querySelector(".category-div");
let videoContainer = document.querySelector(".video-container");
let mainContainer = document.querySelector("main");

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
    /* videoComponent.querySelector(".video-title").textContent = titolo;
    videoComponent.querySelector(".video-name-channel").textContent = nomeCanale;
    videoComponent.querySelector(".video-views").textContent = numeroViews; */
    mainContainer.appendChild(videoComponent);
}
for (let index = 0; index < 20; index++) {
    createVideo();
}