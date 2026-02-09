import gsap from 'gsap'

gsap.set('.gsap-box', {y: -600, x: 600, opacity: 0, scale: 0.5}) // sets the initial state for the animation object

gsap.to('.gsap-box', {y: 0, x: 0, ease: 'expo.out', duration: 2, scale: 1, opacity: 1})