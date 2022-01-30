"use strict";

//Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  if (window.scrollY >= navbarHeight) {
    document.body.classList.add("fixed-nav");
  } else {
    document.body.classList.remove("fixed-nav");
  }
});

// Handle scrolling when tapping on the navbar menu

// Ellie's solve (simple)
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  console.log(target.dataset.link);
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });
});

// Another solve (hard)
// const menuBtns = document.querySelectorAll(".navbar__menu__item");
// menuBtns.forEach((item, index) => {
//   item.addEventListener("click", (e) => {
//     const target = e.target;
//     console.log(target);
//     const link = target.dataset.link;
//     console.log(link);
//     const scrollTo = document.querySelector(link);
//     switch (index) {
//       case 0:
//         scrollTo.scrollIntoView({ behavior: "smooth" });
//         break;
//       case 1:
//         scrollTo.scrollIntoView({ behavior: "smooth" });
//         break;
//       case 2:
//         scrollTo.scrollIntoView({ behavior: "smooth" });
//         break;
//       case 3:
//         scrollTo.scrollIntoView({ behavior: "smooth" });
//         break;
//       case 4:
//         scrollTo.scrollIntoView({ behavior: "smooth" });
//         break;
//       case 5:
//         scrollTo.scrollIntoView({ behavior: "smooth" });
//         break;
//     }
//   });
// });
