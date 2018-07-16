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

    if (scrollY >= 1) {
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
  if (document.querySelector('.parallaxFX')) {
    let parallaxFX = document.querySelector('.parallaxFX');
    parallaxFX.style.backgroundPositionY = scrollY * 0.25 + 'px';
  }
  if (document.querySelector('#parallaxFX2-parent')) {
    let parallax2Parent = document.querySelector('#parallaxFX2-parent');
    let parallaxFX2 = document.querySelector('.parallaxFX2');
    let scrollY2 = scrollY - parallax2Parent.offsetTop - 35;
    parallaxFX2.style.backgroundPositionY = scrollY2 * 0.25 + 'px';
  }
});
