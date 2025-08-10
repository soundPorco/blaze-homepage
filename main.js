// ナビバーの実装
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Swiperのjs
const swiper = new Swiper(".swiper", {
    slidesPerView: 3, // 例: 一度に3枚のスライドを表示
    spaceBetween: 20, // 例: スライド間の余白を20pxに設定
    // ページネーションが必要なら追加
    pagination: {
        el: ".swiper-pagination",
        // type: "progressbar",
    },
    // 最後まで行くと最初の画像に戻ります
    loop: true,
    speed: 1500,
    // 自動スライドです
    autoplay: {
        delay: 3000, // 3秒ごとにスライド
        disableOnInteraction: false, // ユーザー操作後も自動再開
    },
    // ナビボタンが必要なら追加
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
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
