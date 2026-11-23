(function () {
  'use strict';
  // Running VHS counter in the hero.
  var el = document.getElementById('vhsClock');
  if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var start = Date.now();
  var pad = function (n) { return (n < 10 ? '0' : '') + n; };
  setInterval(function () {
    var s = Math.floor((Date.now() - start) / 1000);
    el.textContent = 'SP ' + pad(Math.floor(s / 3600)) + ':' + pad(Math.floor(s / 60) % 60) + ':' + pad(s % 60);
  }, 1000);
})();
