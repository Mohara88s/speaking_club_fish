var tl = gsap.timeline();

tl.pause();
tl.fromTo('.section-2', { x: '-100%', y: '+100%' }, { duration: 2, y: 0 })
tl.addPause();
tl.fromTo('.section-3', { x: '-100%' }, { duration: 2, x: '-200%' })
tl.addPause();
tl.fromTo('.section-4', { x: '-400%' }, { duration: 2, x: '-300%' })
tl.addPause();
tl.fromTo('.section-5', { x: '-400%', y: '+100%' }, { duration: 2, y: 0 })
tl.addPause();
tl.fromTo('.section-6', { x: '-400%' }, { duration: 2, x: '-500%' })
tl.addPause();
tl.fromTo('.section-7', { x: '-700%' }, { duration: 2, x: '-600%' })
tl.addPause();
tl.fromTo('.section-8', { x: '-700%', y: '+100%' }, { duration: 2, y: 0 })
tl.addPause();
tl.fromTo('.section-9', { x: '-700%' }, { duration: 2, x: '-800%' })
tl.addPause();
tl.fromTo('.section-10', { x: '-1000%' }, { duration: 2, x: '-900%' })


window.addEventListener('keydown', onKeydown)

function onKeydown(event) {
  if (event.code === 'ArrowRight') {
    onArrowRightKeydown()
  }
  if (event.code === 'ArrowLeft') {
    onArrowLeftKeydown()
  }
}

function onArrowRightKeydown() {
  console.log('right')
  tl.play();
}
function onArrowLeftKeydown() {
  console.log('left')
  tl.reverse();
}


// const main = document.querySelector('.main')
// ScrollTrigger.create({
//   animation: tl,
//   trigger: '.site-container',
//   start: 'top top',
//   end: () => main.offsetWidth / 2,
//   scrub: true,
//   pin: true,
// })