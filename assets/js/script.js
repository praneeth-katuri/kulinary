// Navbar Sticky on Scroll

// Get The Navbar
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// navLinks Cloes on click
const navLinks = document.querySelectorAll(".navbar-nav .nav-item .nav-link");
const menuToggle = document.querySelector("#navbarNav");
function navLinksClose() {
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("show");
    });
  });
}

navLinksClose();

//  Scroll Reveal
const scroll = ScrollReveal({
  distance: "60px",
  delay: 300,
  duration: 2000,
});

scroll.reveal(`.home__info h1, .home__info p, .home__info .main-btn`, {
  origin: "top",
  interval: 100,
});
scroll.reveal(`.home__image img , .home .category-box`, {
  origin: "left",
  interval: 100,
});

scroll.reveal(`.main-heading , .services .serv , .menu .title`, {
  origin: "top",
  interval: 100,
});
scroll.reveal(`.about .image`, {
  origin: "left",
});
scroll.reveal(`.about .content`, {
  origin: "right",
});

scroll.reveal(`.menu .search`, {
  origin: "bottom",
});
scroll.reveal(`.menu .menu-content .nav .nav-link`, {
  origin: "left",
  interval: 100,
});
scroll.reveal(`.menu .tab-content`, {
  origin: "right",
  interval: 100,
});
scroll.reveal(`.menu .btn , .careers .box `, {
  origin: "bottom",
  interval: 100,
});

scroll.reveal(`.contact .left`, {
  origin: "left",
});
scroll.reveal(`.contact .right`, {
  origin: "right",
});

//  Scroll Top Button
const scrollTopButton = document.querySelector(".scroll-top");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    scrollTopButton.classList.add("show");
  } else {
    scrollTopButton.classList.remove("show");
  }
});

// Update Year
const year = document.querySelector(".year");
year.innerHTML = new Date().getFullYear();
