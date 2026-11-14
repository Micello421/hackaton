(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const values = document.querySelectorAll("[data-count]");

  const animate = (el) => {
    const target = Number(el.dataset.count || 0);
    if (reduceMotion) {
      el.textContent = String(target);
      return;
    }

    const duration = 1200;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = String(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  if (!("IntersectionObserver" in window)) {
    values.forEach(animate);
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animate(entry.target);
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.45 }
  );

  values.forEach((el) => observer.observe(el));
})();
