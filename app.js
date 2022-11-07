var tl = gsap.timeline();

tl.pause();
tl.fromTo('.section-2', { x: '-100%', y: '+100%' }, { duration: 2, y: 0 })
tl.addPause();
tl.fromTo('.section-3', { x: '-100%' }, { duration: 2, x: '-200%' })
tl.addPause();
tl.fromTo('.section-4', { x: '-400%' }, { duration: 2, x: '-300%' })
tl.addPause();
tl.fromTo('.section-5', { x: '-400%', y: '+100%' }, { duration: 3, y: 0 })
tl.addPause();
tl.fromTo('.section-6', { x: '-400%' }, { duration: 2, x: '-500%' })
tl.addPause();
tl.fromTo('.section-7', { x: '-700%' }, { duration: 2, x: '-600%' })
tl.addPause();
tl.fromTo('.section-8', { x: '-700%', y: '+100%' }, { duration: 3, y: 0 })
tl.addPause();
tl.fromTo('.section-9', { x: '-700%' }, { duration: 2, x: '-800%' })
tl.addPause();
tl.fromTo('.section-10', { x: '-1000%' }, { duration: 2, x: '-900%' })
tl.addPause();
tl.fromTo('.section-11', { x: '-1000%', y: '+100%' }, { duration: 3, y: 0 })
tl.addPause();
tl.fromTo('.section-12', { x: '-1000%' }, { duration: 2, x: '-1100%' })
tl.addPause();
tl.fromTo('.section-13', { x: '-1300%' }, { duration: 2, x: '-1200%' })
tl.addPause();
tl.fromTo('.section-14', { x: '-1300%', y: '+100%' }, { duration: 3, y: 0 })
tl.addPause();
tl.fromTo('.section-15', { x: '-1300%' }, { duration: 2, x: '-1400%' })
tl.addPause();
tl.fromTo('.section-16', { x: '-1600%' }, { duration: 2, x: '-1500%' })
tl.addPause();
tl.fromTo('.section-17', { x: '-1600%', y: '+100%' }, { duration: 3, y: 0 })
tl.addPause();
tl.fromTo('.section-18', { x: '-1600%' }, { duration: 2, x: '-1700%' })
tl.addPause();
tl.fromTo('.section-19', { x: '-1900%' }, { duration: 2, x: '-1800%' })
tl.addPause();
tl.fromTo('.section-20', { x: '-1900%', y: '+100%' }, { duration: 3, y: 0 })
tl.addPause();
tl.fromTo('.section-21', { x: '-1900%' }, { duration: 2, x: '-2000%' })
tl.addPause();
tl.fromTo('.section-22', { x: '-2200%' }, { duration: 2, x: '-2100%' })
tl.fromTo('.section-23', { x: '-2200%', y: '+130%'}, { duration: 6, y: '+130%' , ease: "back.out(1.8)", scale:1.4})

const refs = {
  leftBtn: document.querySelector('.button-left'), 
  rightBtn: document.querySelector('.button-right'), 
  video: document.querySelector('.video'),  
};

refs.leftBtn.addEventListener('click', onLeftBtnClick)
refs.rightBtn.addEventListener('click', onRightBtnClick)
window.addEventListener('keydown', onKeydown)

function onLeftBtnClick() {
  tl.reverse();
  stopVideo()
}
function onRightBtnClick() {
  tl.play();
  stopVideo()
}

function onKeydown(event) {
  if (event.code === 'ArrowRight') {
    onArrowRightKeydown()
  }
  if (event.code === 'ArrowLeft') {
    onArrowLeftKeydown()
  }
}

function onArrowRightKeydown() {
  tl.play();
  stopVideo()
}
function onArrowLeftKeydown() {
  tl.reverse();
  stopVideo()
}

function stopVideo() {
  refs.video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
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