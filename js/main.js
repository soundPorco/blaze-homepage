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

// クラス紹介アコーディオンタイプの実装コード
document.querySelectorAll(".accordion-box").forEach((box) => {
    const accordionBtn = box.querySelector(".accordion-toggle");
    const accordionContent = box.querySelector(".accordion-content");

    accordionBtn.addEventListener("click", () => {
        accordionContent.classList.toggle("open");

        accordionBtn.textContent = accordionContent.classList.contains("open")
            ? "閉じる"
            : "詳細を見る";
    });
    console.log("hello");
});
const lightbox = GLightbox();
