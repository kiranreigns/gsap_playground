import gsap from 'gsap'

const bars = document.querySelectorAll('.bar');

bars.forEach((bar, idx) => {
  gsap.fromTo(bar, {
    scaleY: 0.4
  }, {
    scaleY: 1.6,
    yoyo: true,
    repeat: -1,
    ease: 'sine.inOut',
    duration: 0.6,
    delay: 0.1 * idx
  })
})