"use strict";

const navbarElements = document.querySelectorAll(".navbar a"),
  navbarActive = document.querySelector(".navbar .active");

navbarElements.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.add = "active";
  });
});
