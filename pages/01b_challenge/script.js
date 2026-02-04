import { gsap } from "gsap";

gsap.to('.card', {
    opacity: 1,
    scale: 1,
    duration: 2,
    ease: "power2.out",
    onComplete: () => {
        gsap.to('.card', {
            boxShadow: "0 20px 80px rgba(29, 209, 161, 0.6)",
            duration: 1,
            yoyo: true,
            repeat: -1
        })
    }
})