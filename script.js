let input = document.querySelector("#cerca-nav-yt");
let button = document.querySelector("#cerca-btn");

let categoryContainer = document.querySelector("#nav-categorie");
let categoryDiv = document.querySelector(".category-div");

let mainContainer = document.querySelector("main");

let videoContainer = document.querySelector(".video-container");
let videoContainerHeight = videoContainer.offsetHeight;

let mainContainerHeight = mainContainer.scrollHeight;
let mainContainerWidth = mainContainer.offsetWidth;

let numeroVideo = 0;
let videoContainerHeightNumTotalNeeded = Math.round(mainContainerHeight / videoContainerHeight) - 1;

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

function isEnoughtVideoComp() {
    let bodyWidth = document.querySelector("body").offsetWidth;
    if (bodyWidth > 1100) {
        for (let index = 0; index < 4; index++) {
            createVideoDependOnHeight();
        }
    } else if (bodyWidth < 1100 && bodyWidth > 850) {
        for (let index = 0; index < 3; index++) {
            createVideoDependOnHeight();
        }
    } else if (bodyWidth < 850 && bodyWidth > 550) {
        for (let index = 0; index < 2; index++) {
            createVideoDependOnHeight();
        }
    } else if (bodyWidth < 550) {
        createVideoDependOnHeight();
    }
    console.log("MAIN: " + mainContainerHeight + "\nVIDEO: " + videoContainerHeight + "\nDIVISO: " + videoContainerHeightNumTotalNeeded);
}

getNavHeight();

isEnoughtVideoComp();


function createVideoDependOnHeight() {
    for (let index = 0; index < videoContainerHeightNumTotalNeeded + 1; index++) {
        createVideo();
    }
}