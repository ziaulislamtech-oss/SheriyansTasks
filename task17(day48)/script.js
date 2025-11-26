let allKeys = document.querySelectorAll('.white-key,.black-key')
let cursor = document.querySelector('#cursor')
// let body =
document.body.addEventListener('mousemove',(dets)=>{
    cursor.style.position = 'absolute'
    cursor.style.left = `${dets.pageX}px`;
    cursor.style.top = `${dets.pageY}px`
})

allKeys.forEach((key)=>{
  key.addEventListener('click',()=>{
     let soundName = key.dataset.sound
   let audio  = new Audio(`audio/${soundName}.mp3`)
   audio.play()
  })
})

document.addEventListener('keydown',(event)=>{
    let keyPressed = event.key.toUpperCase();
    let pianoKey = document.querySelector(`.white-key[data-key="${keyPressed}"],.black-key[data-key="${keyPressed}"]`)
    // let soundName = pianoKey.dataset.audio;
    if(pianoKey){
        const soundName=pianoKey.dataset.sound
       const audio = new Audio(`audio/${soundName}.mp3`)
       audio.play()
       pianoKey.style.transformOrigin= 'top'
       pianoKey.style.transform = 'rotateX(-5deg)'
       setTimeout(()=>{
           pianoKey.style.transform = 'translateY(0px)'

       },200)
    }
    
})