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

// Burger menu
const navEl = document.querySelector('nav');
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => navEl.classList.toggle('open'));

// Закрыть при клике на ссылку
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => navEl.classList.remove('open'))
);

// Закрыть при клике вне меню
document.addEventListener('click', e => {
  if (!navEl.contains(e.target)) navEl.classList.remove('open');
});
