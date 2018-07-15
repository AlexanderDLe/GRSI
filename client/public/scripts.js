function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Navigation FX
window.addEventListener(
  'scroll',
  debounce(function() {
    let nav = document.querySelector('#nav');
    let logo = document.querySelector('#logoNav');

    if (scrollY > 1) {
      nav.classList.add('nav-scroll');
      logo.classList.add('logoNav-scroll');
    }
    if (scrollY < 1) {
      nav.classList.remove('nav-scroll');
      logo.classList.remove('logoNav-scroll');
    }
  }, 10)
);

// Parallax FX

window.addEventListener('scroll', function() {
  if (document.querySelector('.landingBG')) {
    let landingBG = document.querySelector('.landingBG');
    let landingPB = document.querySelector('#trythis');
    let landingPBX = document.querySelector('.landing-philosophy-box');

    let scrollY2 = scrollY - landingPB.offsetTop - 35;

    landingBG.style.backgroundPositionY = scrollY * 0.25 + 'px';

    landingPBX.style.backgroundPositionY = scrollY2 * 0.25 + 'px';
  }
});
