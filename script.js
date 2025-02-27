document.addEventListener("DOMContentLoaded", function() {
    alert("歡迎來到高級便女培育學院！\n這裡的一切都只是因為我閒的沒事照我的性癖寫出來練習的網站，請勿上網上線！");
});

let index = 0;
const slidesContainer = document.querySelector(".slides");
const slides = slidesContainer.querySelectorAll("a");
const totalSlides = slides.length;

function changeSlide() {
    index = (index + 1) % totalSlides;
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    requestAnimationFrame(() => setTimeout(changeSlide, 5000));
}

// 啟動動畫
setTimeout(changeSlide, 3000);

// 手動控制
function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % totalSlides;
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}
