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

// タイピングアニメーション
function typeText(element, text, speed = 80, callback) {
    let i = 0;
    function typing() {
        if (i <= text.length) {
            element.innerHTML = text.slice(0, i);
            i++;
            setTimeout(typing, speed);
        } else if (callback) {
            callback();
        }
    }
    typing();
}

// 実行
function runTypingAnimation() {
    const title = document.getElementById("typing-title");
    const sub = document.getElementById("typing-sub");
    const theme = document.getElementById("typing-theme");
    const vertical = document.querySelector(".vertical-text > div");

    // 初期状態を空に
    title.textContent = "";
    sub.textContent = "";
    theme.textContent = "";
    vertical.textContent = "";

    typeText(title, "TOKUSHIMA U15 & U12", 80, () => {
        typeText(sub, "BASKETBALL SCHOOL", 80, () => {
            typeText(theme, "「地域の育成環境をより良くする」", 80, () => {
                typeText(vertical, "a representative RYO MIZUKAMI", 80);
            });
        });
    });
}

window.addEventListener("DOMContentLoaded", () => {
    runTypingAnimation();
    // 10秒ごとに繰り返す（必要に応じて時間調整）
    setInterval(runTypingAnimation, 10000);
});
