const menu = document.querySelector(".menu ul");

document.querySelector(".menu__hamburguer").addEventListener("click", () => {
  const iconMenu = document.querySelector(".menu__hamburguer");
  menu.classList.toggle("active");
  iconMenu.classList.toggle("ri-close-line");
  iconMenu.classList.toggle("ri-menu-line");
});

const menuOpenLink = document.querySelectorAll(".menu ul li a");

for (let i = 0; i < menuOpenLink.length; i++) {
  menuOpenLink[i].addEventListener("click", () => {
    menu.classList.toggle("active");
    iconMenu.classList.toggle("ri-close-line");
    iconMenu.classList.toggle("ri-menu-line");
  });
}
