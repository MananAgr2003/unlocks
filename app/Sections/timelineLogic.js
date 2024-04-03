const line = $(".section__line"),
      lineWrapper = $(".section__wrapper");
gsap.set(line, {transformOrigin: "center top", xPercent: -50, x: 0})

gsap.fromTo(line, {
       scaleY: 0,
     }, {
      scaleY: 1,
      scrollTrigger: {
        trigger: lineWrapper,
        start: 0,
        end: "bottom top",
        markers: true,
        scrub: true,
      }
});