/*ハンバーガー*/
"use strict";
{
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.header-nav');

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
  });
}

/* スクロールしたらヘッダーを固定*/
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if(window.scrollY > 110) {
    header.classList.add('sticky');
  }else {
    header.classList.remove('sticky');
  }
});

  
/* 要素をふわっと表示 */
ScrollReveal({ reset: true, distance:"150px" , duration:1000 });
ScrollReveal().reveal('.main-title', { delay: 100,origin:"left" });
ScrollReveal().reveal('.vertical-text', { delay: 100 ,origin: "bottom" });
ScrollReveal().reveal('.mockup-flex img', { delay: 100, interval:200 });
ScrollReveal().reveal('.vertical-text2', { delay: 100 ,origin: "top" });
ScrollReveal().reveal('.boximg', { delay: 100 ,origin: "bottom" });
ScrollReveal().reveal('.item-img', { delay: 100, interval:100 });
ScrollReveal().reveal('.vertical-text3', { delay: 100 ,origin: "top" });

/*トップに戻る*/
const button = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if(window.scrollY > 300) {
    button.style.display = "block";
  } 
  else {
    button.style.display = "none";
  }
});

/*トップボタンを押したとき*/
button.addEventListener('click', () => {
  window.scrollTo({
    top:0 , behavior: 'smooth'
  });
});

/* マウスストーカー*/
const stalker = document.getElementById('mouse-stalker'); 
document.addEventListener('mousemove', function (e) {
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});
