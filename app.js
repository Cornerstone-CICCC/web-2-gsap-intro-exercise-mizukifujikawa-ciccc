// PUT YOUR CODE HERE
let container = document.querySelector(".container");

const timeline = gsap.timeline();
console.log("gsap load");

timeline
  .from(".red", { duration: 0.5, x: -400, y: -400 })
  .from(".green", { duration: 0.5, x: 400, y: -400 })
  .from(".blue", { duration: 0.5, x: 400, y: 400 })
  .from(".yellow", { duration: 0.5, x: -400, y: 400 })

  .to( ".red", { duration: 1, x: () => container.offsetWidth, xPercent: -100, borderRadius: "50%", backgroundColor: "green"} )
  .to( ".green", { duration: 1, y: () => container.offsetHeight, yPercent: -100, borderRadius: "50%", backgroundColor: "blue"}, "<" )
  .to( ".blue", { duration: 1, x: () => -container.offsetWidth, xPercent: 100, borderRadius: "50%", backgroundColor: "yellow"},"<" )
  .to( ".yellow", { duration: 1, y: () => -container.offsetHeight, yPercent: 100, borderRadius: "50%", backgroundColor: "red"}, "<" )

  .to(".red", { duration: 1, x: "+=200" })
  .to(".green", { duration: 1, x: "+=200" }, "<")
  .to(".blue", { duration: 1, x: "-=200" }, "<")
  .to(".yellow", { duration: 1, x: "-=200" }, "<")