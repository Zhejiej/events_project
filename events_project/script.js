
let divRef = document.querySelector("div");
let button1 = document.getElementById("aqua");
let button2 = document.getElementById("teal");
let button3 = document.getElementById("pink");
let button4 = document.getElementById("purple");
let button5 = document.getElementById("colorless");

button1.onclick = function() {
    divRef.style.backgroundColor = "aqua";
    divRef.innerHTML = "aqua";
};
button2.onclick = function() {
    divRef.style.backgroundColor = "teal";
    divRef.innerHTML = "teal";
};
button3.onclick = function() {
    divRef.style.backgroundColor = "pink";
    divRef.innerHTML = "pink";
};
button4.onclick = function() {
    divRef.style.backgroundColor = "purple";
    divRef.innerHTML = "purple";
};
button5.onclick = function() {
    divRef.style.backgroundColor = "white";
    divRef.innerHTML = "colorless";
};

let displayButton = document.getElementById("display-btn");
displayButton.onclick = function() {
    if (divRef.style.display !== "none") {
        divRef.style.display = "none";
        displayButton.innerHTML = "show";
    } else {
        divRef.style.display = "flex";
        displayButton.innerHTML = "hide";
    }
}
