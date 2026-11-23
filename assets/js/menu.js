(function () {
  var btn = document.getElementById('hamburger');
  var navList = document.querySelector('nav ul');
  if (!btn || !navList) return;

  btn.addEventListener('click', function () {
    var expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('open');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      btn.setAttribute('aria-expanded', 'false');
      navList.classList.remove('open');
    }
  });

  navList.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 980) {
        btn.setAttribute('aria-expanded', 'false');
        navList.classList.remove('open');
      }
    });
  });
})();
