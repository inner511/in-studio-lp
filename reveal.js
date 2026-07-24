// Scroll reveal — a quiet fade/rise applied to repeating content blocks
// across every page. Elements are picked up generically by selector,
// so no per-page markup changes are needed. If this script fails to
// load, elements simply render in their normal, fully-visible state.
document.addEventListener('DOMContentLoaded', function(){
  const selectors = [
    '.page-hero h1', '.page-hero .lede',
    '.room', '.work-entry', '.service', '.entry', '.lib-cat', '.p-item',
    '.phi-body p', '.phi-term', '.about-body p',
    '.philosophy-teaser p', '.philosophy-teaser .btn'
  ];
  const targets = document.querySelectorAll(selectors.join(','));
  if(!targets.length) return;

  targets.forEach(function(el, i){
    el.classList.add('reveal');
    el.style.transitionDelay = Math.min(i % 6, 5) * 60 + 'ms';
  });

  const io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(function(el){ io.observe(el); });
});
