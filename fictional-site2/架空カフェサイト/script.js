const header = document.querySelector('header');
const pagetop = document.querySelector(".pagetop");

/*スクロール*/
window.addEventListener('scroll', () => {
  if(window.scrollY > 100) {
    header.classList.add('sticky');
  }else {
    header.classList.remove('sticky');
  }
});


  // .pagetopをクリックしたら
pagetop.addEventListener("click", scroll_top);

// ページ上部へスムーズに移動
function scroll_top() {
  window.scroll({ top: 0, behavior: "smooth" });
}

//ハンバーガー//
const barger = document.querySelector(".barger");
const nav = document.querySelector(".nav");

barger.addEventListener("click",function () {
    barger.classList.toggle('open')
    nav.classList.toggle("open")
})



$(document).ready(function(){
  $('.img1').slick({
  });
});