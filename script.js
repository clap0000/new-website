document.addEventListener("DOMContentLoaded", function() {
    alert("歡迎來到高級便女培育學院！\n這裡的一切都只是為了我的性癖而生，請勿上網上線！");
});

let index = 0;
const slides = document.querySelectorAll(".slides a");

function changeSlide() {
    index = (index + 1) % slides.length;
    document.querySelector(".slides").style.transform = `translateX(-${index * 100}%)`;
}

setInterval(changeSlide, 3000); // 每 3 秒換一張
