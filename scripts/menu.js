// source/scripts/menu.js
var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var body = document.body;
navMain.classList.remove("main-nav--nojs");
navToggle.addEventListener("click", () => {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
    body.classList.add("no-scroll");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
    body.classList.remove("no-scroll");
  }
});
var navLinks = document.querySelectorAll(".main-nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navMain.classList.contains("main-nav--opened")) {
      navMain.classList.remove("main-nav--opened");
      navMain.classList.add("main-nav--closed");
      body.classList.remove("no-scroll");
    }
  });
});
//# sourceMappingURL=menu.js.map
