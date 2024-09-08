gsap.to("#main-box .h1", {
    x: -150, // Slide 'Meet' in from the left

    duration: 2,
    delay: 1,
    opacity: 1,
    ease: "power3.out",
    scale: 1,

});

gsap.to("#main-box .h2", {
    x: 150, // Slide 'Baku' in from the right
    duration: 2,
    delay: 1,
    opacity: 1,
    ease: "power3.out",
    scale: 1
});


gsap.to("#main-box", {
    y: 500, // Move upwards
    duration: 2,
    opacity: 0,
    delay: 2.5,
    ease: "power3.out"

})

gsap.from(".mobile", {
    delay: 2,
    duration: 1,
    scrollTrigger: {
        trigger: ".mobile",
        scroller: "body",
        markers: "true",
        start: "top 5%",
        end: "top -200%",
        scrub: 3,
        pin: true
    }
})
gsap.from(".mobile .h1", {
    transform: "translateX(-100%)",
    duration: 1,
    delay: 1,
    scrollTrigger: {
        trigger: ".mobile .h1",
        scroller: "body",
        markers: "true",
        // start: "top 0%",
        // end: "top -150%",
        scrub: 3,

    }
})
gsap.from(".mobile .h2", {

    transform: "translateX(100%)",
    duration: 1,
    delay: 1,
    scrollTrigger: {
        trigger: ".mobile .h2",
        scroller: "body",
        markers: "true",
        // start: "top 0%",
        // end: "top -150%",
        scrub: 3,
    }
})
gsap.to(".mobile .mobile-container", {

    transform: "translateY(-200%)",
    duration: 3,
    delay: 2,
    scrollTrigger: {
        trigger: ".mobile-container",
        scroller: "body",
        markers: "true",
        start: "top 10%",
        end: "top -100%",
        scrub: 3,
        // pin: true
    }
})