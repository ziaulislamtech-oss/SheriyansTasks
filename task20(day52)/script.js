let box = document.querySelector('.box')
addEventListener('mousemove',(dets)=>{
    console.log(dets.clientX,dets.clientY)
    box.style.background= `radialGradien( ${dets.clientX} at${dets.clientX}px ${dets.clientY}px)`
    // document.body.style.setProperty('--x',dets.clientX + 'px')
    // document.body.style.setProperty('--y',dets.clientY + 'px')
     box.style.background = `
        radial-gradient(${dets.clientX}px at ${dets.clientX}px ${dets.clientY}px, red, blue)
    `;
})
// box.addEventListener('mousemove', (dets) => {
//     box.style.background = `
//         radial-gradient(circle at ${dets.clientX}px ${dets.clientY}px, red, blue)
//     `;
// });
