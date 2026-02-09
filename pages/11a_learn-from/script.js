import gsap from 'gsap'

const repeat = document.querySelector('.repeat');

const animation = gsap.from('.card', {
  opacity: 0, // start invisible
  y: 60, // start 60 px lower like (like translateY(60px))
  scale: 0.95,
  duration: 0.6, // Animate over .6 second
  ease: 'power4.out',
  delay: 0.3,
  stagger: 0.2 // applies the animation one card after the other with a delay of 0.2 secs
})

repeat.addEventListener('click', () => {
  animation.restart();
})