"use strict";

// Navbar a(s)

const passiveNavbars = document.querySelectorAll(".navbar a");

passiveNavbars.forEach((link) => {
  link.addEventListener("click", () => {
    passiveNavbars.forEach((item) => {
      item.classList.remove("nav_active");
    });

    link.classList.add("nav_active");
  });
});

// Modal Box

const modulBtn = document.querySelectorAll("[data-modul]"),
  modulBox = document.querySelector(".modul"),
  closeBtn = document.querySelector(".close");

// modulBox.classList.add("hide");
modulBtn.forEach((item) => {
  item.addEventListener("click", () => {
    modulBox.classList.add("show");
    modulBox.classList.remove("hide");
    document.body.style.overflow = "hidden";
  });
});

closeBtn.addEventListener("click", () => {
  modulBox.classList.remove("show");
  modulBox.classList.add("hide");
  document.body.style.overflow = "";
});

modulBox.addEventListener("click", (e) => {
  if (e.target == modulBox) {
    modulBox.classList.add("hide");
    modulBox.classList.remove("show");
    document.body.style.overflow = "";
  }
});
// modulBtn.forEach((item) => {
//   item.addEventListener("click", () => {
//     item.classList.add("show");
//     item.classList.remove("hide");
//   });
// });

// Slider

const thinkSlide = document.querySelector(".think_slide"),
  clientThink = document.querySelector(".client_think"),
  slideBtns = document.querySelectorAll(".btns span"),
  width = window.getComputedStyle(".think_slide");

let slideIndex = 1;
clientThink.style.width = 100 * thinkSlide.length + "%";
console.log(thinkSlide);

// slideBtns.forEach((link) => {
//   link.addEventListener("click", () => {
//     clientThink.forEach((item) => {
//       item.classList.add("show");
//       item.classList.remove("hide");
//     });
//     slideBtns.forEach((item) => {
//       item.classList.remove("btns_active");
//     });
//     link.classList.add("btns_active");
//   });
// });
