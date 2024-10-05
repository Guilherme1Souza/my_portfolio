const toggle = document.getElementById("toggle");
const body = document.getElementById('body');
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");


toggle.addEventListener('change', () => {
  body.classList.toggle('dark');
})


hamburger.addEventListener("click", () => nav.classList.toggle("active"));