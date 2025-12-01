// ナビバーの実装
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

const navButtons = document.querySelectorAll(".nav-btn");
navButtons.forEach((button) => {
    button.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});
