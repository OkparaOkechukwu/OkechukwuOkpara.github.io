var typed = new Typed(".type", {
  strings: ["Developer", "Designer", "Programmer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
var typed = new Typed(".type-2", {
  strings: ["Developer", "Designer", "Programmer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,

  loop: true,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

const header = document.querySelector(".header-container");
const scrollBtn = document.querySelector(".scroll-top");
const menuBar = document.querySelector("#bar");
const closeBtn = document.querySelector("#closebtn");
const menu = document.querySelector("#menu");

 

menuBar.addEventListener("click", () => {
  menu.classList.add("show");
  console.log('clicked');
})
closeBtn.addEventListener("click", () => {
  menu.classList.remove("show");
 
});



window.addEventListener("scroll", () => {
  scrollY > 20
    ? header.classList.add("sticky")
    : header.classList.remove("sticky");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.opacity = 1;
    scrollBtn.style.transform = "translateY(-20px)";
  } else {
    scrollBtn.style.opacity = 0;
    scrollBtn.style.transform = "translateY(0)";
  }
});

scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
