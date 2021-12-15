let categoryContainer = document.querySelector("#nav-categorie");
let input = document.querySelector("#cerca-nav-yt");
let button = document.querySelector("#cerca-btn");
let categoryDiv = document.querySelector(".category-div");

console.log(categoryDiv);

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