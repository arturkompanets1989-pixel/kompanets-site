const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('vis'); });
}, {threshold: 0.1});
document.querySelectorAll('.fu').forEach(el => obs.observe(el));
