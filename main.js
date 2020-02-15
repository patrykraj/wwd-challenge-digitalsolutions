function render() {

 function renderMenu() {
  const menuBtn = document.querySelector('nav .hamburger-menu');
  const menuCollapse = document.querySelector('.menu-collapse');

  function menuToggle() {
   this.classList.toggle('hamburger-menu-active');
   menuCollapse.classList.toggle('menu-collapse-active');
   document.querySelector('.nav').classList.toggle('nav-active');
  }

  menuBtn.addEventListener('click', menuToggle);
 }

 renderMenu();
}

render();