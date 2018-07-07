// let landingWrap = document.querySelector('.landingWrap');
// let nav = document.querySelector('#nav');

window.addEventListener('scroll', function() {
  let landingWrap = document.querySelector('.landingWrap');
  let nav = document.querySelector('#nav');

  landingWrap.style.backgroundPositionY = scrollY * 0.25 + 'px';
  console.log(scrollY);
  if (scrollY > 1) {
    nav.classList.add('nav-scroll');
  }
  if (scrollY < 1) {
    nav.classList.remove('nav-scroll');
  }
});
