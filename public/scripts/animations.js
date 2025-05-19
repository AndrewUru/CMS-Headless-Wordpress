// src/scripts/animations.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Animación con seguimiento del mouse para el efecto de brillo
export function initIntroCardGlow() {
  const introCard = document.querySelector(".intro-card");
  if (introCard) {
    introCard.addEventListener("mousemove", (e) => {
      const rect = introCard.getBoundingClientRect();
      introCard.style.setProperty("--x", `${e.clientX - rect.left}px`);
      introCard.style.setProperty("--y", `${e.clientY - rect.top}px`);
    });
  }
}

export function initGSAPAnimations() {
  // Animaciones GSAP con ScrollTrigger
  gsap.from(".hero-gradient", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    ease: "power4.out",
  });

  gsap.from(".subtitle", {
    duration: 1,
    opacity: 0,
    y: 30,
    delay: 0.3,
    ease: "expo.out",
  });

  gsap.from(".intro-card", {
    scrollTrigger: {
      trigger: ".intro-card",
      start: "top 80%",
    },
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power2.out",
  });

  gsap.from(".card-grid > *", {
    scrollTrigger: {
      trigger: ".card-grid",
      start: "top 90%",
    },
    duration: 0.8,
    opacity: 0,
    y: 40,
    stagger: 0.15,
    ease: "back.out(1.4)",
  });
}
