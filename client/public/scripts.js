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

// Parallax FX

window.addEventListener('scroll', function() {
  if (document.querySelector('.parallaxFX')) {
    let parallaxFX = document.querySelector('.parallaxFX');
    parallaxFX.style.backgroundPositionY = scrollY * 0.25 + 'px';
  }
});
