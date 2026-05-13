// ===== PRELOADER =====
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  setTimeout(() => {
    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";
  }, 2200);
});

// ===== CUSTOM CURSOR =====
const ball = document.getElementById("ball");
document.addEventListener("mousemove", e => {
  ball.style.left = e.clientX + "px";
  ball.style.top  = e.clientY + "px";
});

// Cursor hover effect on interactive elements
const hoverTargets = document.querySelectorAll("a, button, img, .chip, .exp-content, .road-content");
hoverTargets.forEach(el => {
  el.addEventListener("mouseenter", () => ball.classList.add("hovered"));
  el.addEventListener("mouseleave", () => ball.classList.remove("hovered"));
});

// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // animate once
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));

// ===== STAGGERED REVEAL for roadmap items =====
const roadItems = document.querySelectorAll(".road-item");
const roadObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("visible");
      }, 100);
      roadObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

roadItems.forEach(el => roadObserver.observe(el));
