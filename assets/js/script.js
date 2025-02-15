"use strict";

// navbar toogle

const navbar = document.querySelector("[data-navbar]");
const navbarLink = document.querySelectorAll("[data-nav-link]");
const menuToggle = document.querySelector("[data-nav-toggle-menu]");

menuToggle.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLink.length; i++) {
  navbarLink[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });
}

// header sticky & back to stop

const header = document.querySelector("[data-header]");
const backTostop = document.querySelector("[data-back-top-btn]");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTostop.classList.add("active");
  } else {
    header.classList.remove("active");
    backTostop.classList.remove("active");
  }
});

// search box toggle

const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

const searchBoxElement = [searchBtn, searchSubmitBtn, searchCloseBtn];

for (let i = 0; i < searchBoxElement.length; i++) {
  searchBoxElement[i].addEventListener("click", () => {
    searchContainer.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}

// move cycle on scroll

const deliveryBoy = document.querySelector("[data-delivery-boy]");
let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", () => {
  let deliveryBoyTopPost = deliveryBoy.getBoundingClientRect().top;
  if (deliveryBoyTopPost < 500 && deliveryBoyTopPost > 250) {
    let activeScrollPos = window.screenY;
    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove++;
    } else {
      deliveryBoyMove--;
    }
    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }
});
