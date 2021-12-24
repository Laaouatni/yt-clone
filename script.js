let CercaInput = document.querySelector("#cerca-nav-yt");
let CercaBtn = document.querySelector("#cerca-btn");

let categoryContainer = document.querySelector("#nav-categorie");
let categoryDiv = document.querySelector(".category-div");

let mainContainer = document.querySelector("main");

let videoContainer = document.querySelector(".video-container");
let videoContainerHeight = videoContainer.offsetHeight;
let allVideoContainer = document.querySelectorAll(".video-container");

let mainContainerHeight = mainContainer.scrollHeight;
let mainContainerWidth = mainContainer.offsetWidth;

let nav = document.querySelector("nav");
let navTop = document.querySelector("#top-nav");
let navBottom = document.querySelector("#nav-categorie");

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
    } else if (randomSecond >= 60) {
        randomTime = randomMin + ":" + "59";
    } else { randomTime = randomMin + ":" + randomSecond; }

    videoComponent.querySelector(".video-title").textContent = "titolo Video " + numeroVideo;
    videoComponent.querySelector(".video-name-channel").textContent = "Canale Youtube " + numeroVideo;
    videoComponent.querySelector(".video-views").textContent = randomNumber + " visualizzazioni";
    videoComponent.querySelector(".video-time").textContent = randomTime;

    randomColor();
    mainContainer.appendChild(videoComponent);
    if (window.onscroll) { categoryDiv.textContent = "sta scorrendo"; }
}

window.addEventListener("scroll", function() {
    let scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

    if (scrollPercentage != 0) {
        navTop.style.opacity = "0.95";
        navBottom.style.opacity = "0.95";
    } else {
        navTop.style.opacity = "1";
        navBottom.style.opacity = "1";
    }
    if (scrollPercentage > 70) {
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
    if (bodyWidth > 1700) {
        for (let index = 0; index < 5; index++) {
            createVideoDependOnHeight();
        }
    } else if (bodyWidth > 1100 && bodyWidth < 1700) {
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
}

function createVideoDependOnHeight() {
    for (let index = 0; index < videoContainerHeightNumTotalNeeded; index++) {
        createVideo();
    }
}

getNavHeight();

isEnoughtVideoComp();

/* videoContainer.addEventListener("mousedown", function() {
    document.onmousemove = function(e) {
        VideoX = e.clientX;
        VideoY = e.clientY;
        videoContainer.style.position = "relative";
        videoContainer.style.bottom = VideoY + "px";
        videoContainer.style.transitionDuration = 0;
        categoryDiv.textContent = VideoY;
    }
}) */

mainContainer.addEventListener("click", function(e) {
    var closestDiv = e.target.closest(".video-container");
    console.log(e.target);
    console.log(closestDiv);
    /* check if clicked the first video container */
    if (closestDiv == allVideoContainer[0]) {
        closestDiv.style = none;
        closestDiv.style.outline = "2px solid red";
    } else {
        closestDiv.style.zIndex = "9999";
        closestDiv.style.position = "fixed";
        closestDiv.style.top = 0;
        closestDiv.style.left = 0;
        closestDiv.style.width = "100vw";
    }
});