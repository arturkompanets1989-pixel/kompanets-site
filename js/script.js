// Помечаем <html> классом 'js' — CSS использует это чтобы
// скрывать .fu-элементы только когда JS точно работает.
// Без этой строки (нет JS, блокировщик, медленная загрузка) —
// весь контент виден сразу, как будто анимаций нет.
document.documentElement.classList.add('js');

const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('vis');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

document.querySelectorAll('.fu').forEach(el => obs.observe(el));
