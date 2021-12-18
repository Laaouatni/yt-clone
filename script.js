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
    document.documentElement.style.setProperty("--navAllHeight", navHeight + "px");
}

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

    randomColor();
    mainContainer.appendChild(videoComponent);
}

window.addEventListener("scroll", function() {
    let scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercentage > 90) {
        createVideo();
    }
});


function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    document.querySelector(".video-thumbnail").style.background = "rgb(" + r + ", " + g + ", " + b + ")";
}


function isEnoughtVideo() {
    let videoContainerHeight = document.querySelector(".video-container").offsetHeight;
    let mainContainerHeight = document.querySelector("main").offsetHeight;
    let videoContainerHeightPercentage = videoContainerHeight / mainContainerHeight;
    console.log({ videoContainerHeightPercentage });
}

isEnoughtVideo()

getNavHeight();