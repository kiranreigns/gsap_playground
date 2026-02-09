import gsap from "gsap";

const card = document.querySelector("#card");

let isFlipped = false;

card.addEventListener("mouseenter", () => {
  if (!isFlipped) {
    gsap.from(card, {
      rotationY: 0,
      duration: 0.8,
      ease: "power2.inOut",
    });
    gsap.to(card, {
      rotationY: 180,
      duration: 0.8,
      ease: "power2.inOut",
    });
    isFlipped = true;
  }
});

card.addEventListener("mouseleave", () => {
  if (isFlipped) {
    gsap.from(card, {
      rotationY: 180,
      duration: 0.8,
      ease: "power2.inOut",
    });
    gsap.to(card, {
      rotationY: 0,
      duration: 0.8,
      ease: "power2.inOut",
    });
    isFlipped = false;
  }
});