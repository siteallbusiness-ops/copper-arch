(function () {
  var btn = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }

  var header = document.querySelector(".site-header");
  if (!header) return;
  var hero = document.querySelector(".hero") || document.querySelector(".page-hero");
  function onScroll() {
    var y = window.scrollY || 0;
    var threshold = hero ? Math.min(hero.offsetHeight * 0.35, 160) : 80;
    header.classList.toggle("is-scrolled", y > threshold);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();
