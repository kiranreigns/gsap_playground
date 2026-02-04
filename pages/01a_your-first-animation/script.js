gsap.to('.card', {
    opacity: 1,
    scale: 1,
    duration: 2,
    onComplete: () => {
        gsap.to('.card', {
            y: -20,
            repeat: -1, // -1 means infinite
            yoyo: true, // reverse on every other repeat (back and forth)
            duration: 1
        })
    }
    }
)