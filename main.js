const navbar = document.querySelector(".menu");
const hamburger = document.querySelector(".menu-extra #hamburger");
// document.querySelector(".menu-extra #hamburger").onclick = () => {
//   navbar.classList.toggle("active");
// };

const body = document.getElementsByTagName("body");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});
