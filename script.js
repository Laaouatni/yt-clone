let CercaInput = document.querySelector("#cerca-nav-yt");
let CercaBtn = document.querySelector("#cerca-btn");

let categoryContainer = document.querySelector("#nav-categorie");
let categoryDiv = document.querySelector(".category-div");

let mainContainer = document.querySelector("main");

let videoContainer = document.querySelector(".video-container");
let videoContainerHeight = videoContainer.offsetHeight;

let mainContainerHeight = mainContainer.scrollHeight;
let mainContainerWidth = mainContainer.offsetWidth;

let numeroVideo = 0;
let videoContainerHeightNumTotalNeeded = Math.round(mainContainerHeight / videoContainerHeight);
let trendingStyleCSS = ".trending-video:after, .trending-video:before {content: ' 🔥 '; text-shadow: 0 0 1em red;}";

function createCategory(category) {
    let newDiv = document.createElement("div");
    newDiv.textContent = category;
    categoryContainer.appendChild(newDiv);
    newDiv.classList.add("category-div");
}

CercaBtn.addEventListener("click", function() {
    if (CercaInput.value != "") {
        createCategory(CercaInput.value);
        CercaInput.value = "";
    } else {
        createCategory("prova a inserire qualcosa nella ricerca :)");
        CercaInput.value = "";
    }
});

function getNavHeight() {
    let navHeight = document.querySelector("nav").offsetHeight;
    document.documentElement.style.setProperty("--navAllHeight", navHeight + "px");
}

function createVideo() {
    // copia il codice html
    let videoComponent = videoContainer.cloneNode(true);

    let randomNumber = Math.floor(Math.random() * 1000);
    numeroVideo += 1;

    let randomMin = Math.round(Math.random() * 10);
    let randomSecond = Math.round(Math.random() * 60);
    let randomTime = "";

    if (randomNumber > 900) {
        videoComponent.querySelector(".video-views").classList.add("trending-video");
        document.querySelector("style").innerHTML = trendingStyleCSS;
    } else {
        videoComponent.querySelector(".video-views").classList.remove("trending-video");
    }

    if (randomSecond < 10) {
        randomTime = randomMin + ":" + "0" + randomSecond;
    } else if (randomSecond > 60) {
        randomTime = "ERROR";
    } else { randomTime = randomMin + ":" + randomSecond; }

    videoComponent.querySelector(".video-title").textContent = "titolo Video " + numeroVideo;
    videoComponent.querySelector(".video-name-channel").textContent = "Canale Youtube " + numeroVideo;
    videoComponent.querySelector(".video-views").textContent = randomNumber + " visualizzazioni";



    document.querySelector("style").innerHTML += ".video-thumbnail:hover::before { content: '" + randomTime + "';}";
    randomColor();
    mainContainer.appendChild(videoComponent);
}

window.addEventListener("scroll", function() {
    let scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercentage > 85) {
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

function createVideoDependOnHeight() {
    for (let index = 0; index < videoContainerHeightNumTotalNeeded; index++) {
        createVideo();
        console.log(videoContainerHeightNumTotalNeeded);
    }
}

getNavHeight();

isEnoughtVideoComp();