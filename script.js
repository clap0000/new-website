document.addEventListener("DOMContentLoaded", function() {
    alert("歡迎來到高級便女培育學院！\n這裡的一切都只是為了我的性癖而生，請勿上網上線！");
});
<style>
    .card {
        width: 200px;
        height: 300px;
        perspective: 1000px;
    }
    .inner-card {
        width: 100%;
        height: 100%;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 0.5s;
    }
    .front, .back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
    }
    .front {
        background: lightblue;
    }
    .back {
        background: pink;
        transform: rotateY(180deg);
    }
    .flipped {
        transform: rotateY(180deg);
    }
</style>

<div class="card" onclick="flipCard(this)">
    <div class="inner-card">
        <div class="front">學生照片</div>
        <div class="back">詳細資料</div>
    </div>
</div>

<script>
    function flipCard(card) {
        card.querySelector(".inner-card").classList.toggle("flipped");
    }
</script>
