const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '110a130956msh30968c806233f3dp1d5eb5jsn2a27460d0e94',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/minutely?lat=35.5&lon=-78.5', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


const timeLine = gsap.timeline({ default: { duration: 1 } });

timeLine
  .to(".banner", { opacity: 1 }, 1)
  .to(".mine", {
    scrollTrigger: {
      trigger: ".mine",
      scrub: true,
      toggleActions: "restart pause reverse pause",
    },
    rotation: 5,
    rotation: -5,
    duration: 5,
  })
  .from(".steps", {
    scrollTrigger: {
      trigger: ".steps",
      scrub: true,
      toggleActions: "restart pause reverse pause",
    },
    rotation: 10,
    rotation: -10,
    duration: 2,
    ease: "elastic",
  })
  .to(".ser", {
    scrollTrigger: {
      trigger: ".ser",
    },
    opacity: 1,
    ease: "elastic",
  })
  .fromTo(
    ".servicesBx",

    {
      scrollTrigger: {
        trigger: ".servicesBx",
        scrub: true,
        toggleActions: "restart pause reverse pause",
      },
      opacity: 0,
      x: "-1000%",
      stagger: 0.5,
    },
    {
      scrollTrigger: {
        trigger: ".servicesBx",
        scrub: true,
        toggleActions: "restart pause reverse pause",
      },
      x: 0,
      opacity: 1,
      stagger: 0.5,
    }
  )
  .fromTo(
    ".workBx",
    {
      scrollTrigger: {
        trigger: ".workBx",
        scrub: true,
        toggleActions: "restart pause reverse pause",
      },
      opacity: 0,
      x: "-1000%",
      stagger: 0.5,
    },
    {
      scrollTrigger: {
        trigger: ".workBx",
        scrub: true,
        toggleActions: "restart pause reverse pause",
      },
      x: 0,
      opacity: 1,
      stagger: 0.5,
    }
  )

  .fromTo(
    ".testimonialBx",
    {
      scrollTrigger: {
        trigger: ".testimonialBx",
        scrub: true,
        toggleActions: "restart pause reverse pause",
      },
      scale: 1,
    },
    {
      scrollTrigger: {
        trigger: ".testimonialBx",
        scrub: true,
        toggleActions: "restart pause reverse pause",
      },
      scale: 0.75,
    }
  );
