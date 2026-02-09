import gsap from "gsap";

const showToastLoop = () => {
  gsap.to(".toast", {
    y: -120,
    opacity: 1,
    duration: 0.7,
    scale: 1,
    ease: "power4.out",
    onComplete: () => {
      gsap.to(".toast", {
        delay: 2.5,
        y: 0,
        scale: 0.95,
        opacity: 0,
        duration: 0.6,
        ease: "power4.in",
        onComplete: () => {
          setTimeout(showToastLoop, 2500)
        }
      });
    },
  });
};

showToastLoop()