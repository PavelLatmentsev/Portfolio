const hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu"),
    closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
    menu.classList.add("active")
})

closeElem.addEventListener("click", () => {
    menu.classList.remove("active")
})

const counters = document.querySelectorAll(".hardskills__volume__counter");
const widthLine = document.querySelectorAll(".hardskills__volume__footer-field");

counters.forEach((counter, i) => {
    widthLine[i].style.width = counter.innerHTML;
})