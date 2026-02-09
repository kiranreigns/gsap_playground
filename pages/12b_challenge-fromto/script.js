import gsap from "gsap";

const buttons = document.querySelectorAll(".reactions button");
const demo = document.querySelector(".demo");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const emoji = button.getAttribute("data-emoji");

    // Create bubble element
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.textContent = emoji;

    // Position at button location
    const rect = button.getBoundingClientRect();
    const demoRect = demo.getBoundingClientRect();

    bubble.style.left = `${rect.left - demoRect.left + rect.width / 2 - 14}px`;
    bubble.style.top = `${rect.top - demoRect.top}px`;

    demo.appendChild(bubble);

    // Animate the bubble
    gsap.fromTo(
      bubble,
      {
        y: 0,
        scale: 1,
        rotation: -15,
        opacity: 1,
      },
      {
        y: -150,
        scale: 2,
        rotation: 15,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        onComplete: () => {
          bubble.remove();
        },
      },
    );
  });
});

// const reactions = document.querySelectorAll("button");

// reactions.forEach((reaction, idx) => {
//   reaction.addEventListener("click", () => {
//     gsap.fromTo(
//       reaction,
//       {
//         y: -20,
//         scale: 2.5,
//         duration: 0.2,
//         ease: "back.out",
//       },
//       {
//         y: 0,
//         scale: 1,
//         ease: "back.in",
//       },
//     );
//   });
// });
