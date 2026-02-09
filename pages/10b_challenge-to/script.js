import gsap from "gsap";

const container = document.querySelector(".demo");
const notifications = document.querySelectorAll(".toast");

const toastNotifications = () => {
  const tl = gsap.timeline({repeat: -1});

  notifications.forEach((notification) => {
    tl.to(notification, {
      y: -120,
      opacity: 1,
      duration: 0.7,
      scale: 1,
      ease: "power4.out",
    })
    .to(notification, {
      delay: 2.5,
      y: 0,
      scale: 0.95,
      opacity: 0,
      duration: 0.6,
      ease: "power4.in",
    });
  });
};

toastNotifications();