const button = document.querySelector('.nav-button');
const nav = document.querySelector('.nav-links');
const header = document.querySelector('header');
const pagetop = document.querySelector(".pagetop");

button.addEventListener('click', function() {

    button.classList.toggle('active');
    nav.classList.toggle('open');
});


// .pagetopをクリックしたら
pagetop.addEventListener("click", scroll_top);

// ページ上部へスムーズに移動
function scroll_top() {
  window.scroll({ top: 0, behavior: "smooth" });
}

// スクロールされたら表示
window.addEventListener("scroll", scroll_event);
function scroll_event() {
  if (window.pageYOffset > 100) {
    pagetop.style.opacity = "1";
  } else if (window.pageYOffset < 100) {
    pagetop.style.opacity = "0"; 
  }
}

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  });


  /*スクロール*/
  document.addEventListener("DOMContentLoaded",()=>{
    const section = document.querySelectorAll('section');
    circleImages.forEach((circleImage,index)=>{
      setTimeout(()=>{
        circleImage.classList.add('show');
      },index * 800)
    });
  });

  ScrollReveal({ reset: true, distance: "60px" ,duration: 1000 });
  ScrollReveal().reveal('.concept-box', {delay: 500 });
  ScrollReveal().reveal('.concept-img', {delay: 500 });

  ScrollReveal().reveal('.info-item1', {delay: 500,interval:200 });
  ScrollReveal().reveal('.slider-item', {delay: 500,interval:200 });/*access*/
  ScrollReveal().reveal('.Greeting-inner', {delay: 500});/*access*/
 
  ScrollReveal().reveal('.about-policy-flex', {delay: 500});/*abouthtml */
  ScrollReveal().reveal('.about-pictures-items',{delay:500});


