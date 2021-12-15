let categoryContainer = document.querySelector("#nav-categorie");
let input = document.querySelector("#cerca-nav-yt");
let button = document.querySelector("#cerca-btn");
let categoryDiv = document.querySelectorAll(".category-div");

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
        for (let i = 0; i < categoryDiv.length; i++) {
            categoryDiv[i].addEventListener("click", function() {
                this.classList.toggle("clickedCategory");
            });
        }
    } else {
        createCategory("prova a inserire qualcosa nella ricerca :)");
        input.value = "";
    }
});
for (let i = 0; i < categoryDiv.length; i++) {
    categoryDiv[i].addEventListener("click", function() {
        this.classList.toggle("clickedCategory");
    });
}