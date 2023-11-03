// Hamburger menu and sidebar
let icon = document.querySelector(".nav--hamburger-menu");
let navMobile = document.querySelector(".header--nav-mobile");
let line = document.querySelectorAll(".nav--hamburger-menu__line");

icon.addEventListener("click", function () {
  if (navMobile.style.transform === `translateX(15em)`) {
    line[0].style.transform = `rotate(0deg) translate(0, 0)`;
    line[1].style.width = `2em`;
    line[2].style.transform = `rotate(0deg) translate(0, 0)`;
    navMobile.style.transform = `translateX(0em)`;
  } else {
    line[0].style.transform = `rotate(45deg) translate(0, .83em)`;
    line[1].style.width = `0`;
    line[2].style.transform = `rotate(-45deg) translate(0, -.83em)`;
    navMobile.style.transform = `translateX(15em)`;
  }
});

// Header opacity
let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (this.scrollY > 500) {
    header.style.opacity = "0";
  } else {
    header.style.opacity = "1";
  }
});
