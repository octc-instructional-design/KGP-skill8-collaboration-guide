/* Designing Collaboration That Works: small page behaviors (same as the Pathfinder Guidebook)
   1. Links that leave the guide open in a new tab.
   2. Chapter sidebar: open on wide screens, collapsed ("Pages" button) on narrow ones.
   3. Highlights the section being read in the sidebar's section list.
   Pages work without this file; it only adds polish. */
(function () {
  document.querySelectorAll('a[href^="http"]').forEach(function (a) {
    if (a.hostname !== location.hostname) { a.target = '_blank'; a.rel = 'noopener'; }
  });

  var d = document.getElementById('chapdetails');
  if (d) {
    var mq = window.matchMedia('(max-width: 900px)');
    var sync = function () { d.open = !mq.matches; };
    sync();
    if (mq.addEventListener) mq.addEventListener('change', sync);
    var s = d.querySelector('summary');
    if (s) s.addEventListener('click', function (e) { if (!mq.matches) e.preventDefault(); });
  }

  var links = {};
  document.querySelectorAll('.chapnav .sections a[href^="#"]').forEach(function (a) {
    links[a.getAttribute('href').slice(1)] = a;
  });
  if (!Object.keys(links).length || !('IntersectionObserver' in window)) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      Object.keys(links).forEach(function (k) { links[k].classList.remove('on'); links[k].removeAttribute('aria-current'); });
      var a = links[en.target.id];
      if (a) { a.classList.add('on'); a.setAttribute('aria-current', 'location'); }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });
  Object.keys(links).forEach(function (id) {
    var el = document.getElementById(id);
    if (el) io.observe(el);
  });
})();
