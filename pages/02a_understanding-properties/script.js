import gsap from 'gsap'

gsap.to('.box', {
    // x: 200,
    // y: -100,
    // opacity: 1,
    rotation: 360,
    duration: 1.5,
    // delay: 0.5,
    // background: '#ff6f61',
    // borderRadius: '50%',
    scale: 1.3,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
    // repeatDelay: 1
    // paused: true,
    stagger: 1
})