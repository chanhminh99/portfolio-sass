// Custom menu burger

const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
// Custom navbar
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
// Custom nav - item
const navItems = document.querySelectorAll(".menu-nav__item");

let showMenu = false;

const toggleMenu = () => {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");

    navItems.forEach((item) => item.classList.add("open"));

    showMenu = true;
  } else {
    hamburger.classList.remove("open");

    nav.classList.remove("open");
    menuNav.classList.remove("open");

    navItems.forEach((item) => item.classList.remove("open"));
    showMenu = false;
  }
};

menuBtn.addEventListener("click", toggleMenu);
