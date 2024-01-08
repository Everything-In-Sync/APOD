const image = document.querySelector(".toggle-image");
const toggle = document.querySelector(".toggle")
const body = document.querySelector("body");
const a = document.querySelector("a");
const logo = document.querySelector(".logo");
const podTitle = document.querySelector(".pod-title");
const archiveTitle = document.querySelector(".archive-title");
const dateTitle = document.querySelector(".date-title");
let mode = document.querySelector("#mode");
let toggleCount = 0;
toggle.addEventListener("click", toggleMode);


function toggleMode() {
    if (mode.classList.contains("light")) {
        toggleCount += 1;
        logo.style.filter = "brightness(0) invert(1)";
        body.style.color = "#fefffe";
        body.style.backgroundColor = "#000";
        a.style.color = "#fefffe";
        podTitle.style.color = "#f57238";
        archiveTitle.style.color = "#f57238";
        dateTitle.style.color = "#f57238";
        image.src = "assets/graphics/sun.png";
        mode.classList.remove("light");
        mode.classList.add("dark");
    } else if (mode.classList.contains("dark")) {
        toggleCount -= 1;
        logo.style.filter = "";
        body.style.backgroundColor = "#fefffe";
        body.style.color = "#1e1e1e";
        a.style.color = "#1e1e1e";
        podTitle.style.color = "#1e1e1e";
        archiveTitle.style.color = "#1e1e1e";
        dateTitle.style.color = "#1e1e1e";
        image.src = "assets/graphics/moon.png";
        mode.classList.remove("dark");
        mode.classList.add("light");
    }
}


