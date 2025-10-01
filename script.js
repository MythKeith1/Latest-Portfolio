// Loader
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// Mobile nav toggle
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");
hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});

// Rotating hero words
const words = ["Creative", "Professional", "Skilled"];
let i = 0;
setInterval(() => {
  document.getElementById("animWords").textContent = words[i];
  i = (i + 1) % words.length;
}, 2000);
