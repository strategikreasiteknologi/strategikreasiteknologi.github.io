import "bootstrap";

const openMenu = document.querySelector("#openMenu");
openMenu.addEventListener("click", () => {
  let menu = document.querySelector(".menu");
  menu.classList.remove("d-none");
  menu.classList.add("animate__fadeIn");
});
const closeMenu = document.querySelector("#closeMenu");
closeMenu.addEventListener("click", () => {
  let menu = document.querySelector(".menu");
  menu.classList.add("d-none");
  menu.classList.remove("animate__fadeIn");
});
