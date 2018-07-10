// let landingWrap = document.querySelector('.landingWrap');
// let nav = document.querySelector('#nav');

window.addEventListener('scroll', function() {
  let landingBG = document.querySelector('.landingBG');
  let landingPB = document.querySelector('#trythis');
  let landingPBX = document.querySelector('.landing-philosophy-box');
  let nav = document.querySelector('#nav');
  let logo = document.querySelector('#logoNav');

  let scrollY2 = scrollY - landingPB.offsetTop - 128;

  landingBG.style.backgroundPositionY = scrollY * 0.25 + 'px';

  landingPBX.style.backgroundPositionY = scrollY2 * 0.25 + 'px';

  if (scrollY > 1) {
    nav.classList.add('nav-scroll');
    logo.classList.add('logoNav-scroll');
  }
  if (scrollY < 1) {
    nav.classList.remove('nav-scroll');
    logo.classList.remove('logoNav-scroll');
  }
});
