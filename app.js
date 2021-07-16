window.onload = function () {
  const nav_btn = document.querySelector('.menu-icon');
  const nav_mobile = document.querySelector('.nav-mobile');

  nav_btn.addEventListener('click', function () {
    nav_btn.classList.toggle('is-active');
    nav_mobile.classList.toggle('is-active');
  })
}