let body = document.querySelector('body')
let box = document.querySelector('.box')
body.addEventListener('mousemove',(dets)=>{
    box.style.setProperty('--x', `${dets.clientX}px`);
    box.style.setProperty('--y', `${dets.clientY}px`)
})