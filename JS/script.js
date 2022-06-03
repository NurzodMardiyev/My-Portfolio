"use strict";

const navbarElements = document.querySelectorAll(".navbar a"),
  navbarActive = document.querySelector(".navbar .active");

navbarElements.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.add = "active";
  });
  item.addEventListener("click", () => {
    item.classList.remove = "active";
  });
});

// Modul

const modulBox = document.querySelector("#modul"),
  modulBtn = document.querySelector("[moodulBtn]");

modulBtn.addEventListener("click", () => {
  modulBox.classList.add = "#modul show";
});
