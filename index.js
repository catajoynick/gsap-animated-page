const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector(".navbar__logo");
const body = document.querySelector("body");

// Displays mobile menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
  body.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".animate__hero", {
  duration: 0.7,
  opacity: 0,
  y: -150,
  stagger: 0.3,
});

gsap.from(".animate__services", {
  scrollTrigger: ".animate__services",
  duration: 0.7,
  opacity: 0,
  x: -150,
  stagger: 0.12,
});

gsap.from(".animate__membership", {
  scrollTrigger: ".animate__membership",
  duration: 0.7,
  opacity: 0,
  x: -250,
});

gsap.from(".animate__team", {
  scrollTrigger: ".animate__team",
  duration: 0.7,
  opacity: 0,
  y: -250,
  stagger: 0.6,
});

gsap.from(".animate__email", {
  scrollTrigger: ".animate__email",
  duration: 0.7,
  opacity: 0,
  y: -150,
  stagger: 0.3,
});
