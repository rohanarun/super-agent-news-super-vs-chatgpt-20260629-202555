(function () {
  if (!window.gsap) return;

  gsap.from('.hero h1', { opacity: 0, y: 40, duration: 1, ease: 'power3.out' });
  gsap.from('.hero-sub', { opacity: 0, y: 20, duration: 0.8, delay: 0.2 });
  gsap.from('.media-frame', { opacity: 0, scale: 0.96, duration: 1, delay: 0.4 });

  const reveals = document.querySelectorAll('.chapter');
  reveals.forEach(section => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top 80%'
      },
      opacity: 0,
      y: 60,
      duration: 0.9
    });
  });
})();