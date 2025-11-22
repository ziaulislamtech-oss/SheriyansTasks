let icon = document.querySelector('i')
let parent = document.querySelector('.parent')
console.log(parent)
parent.addEventListener("dblclick",()=>{
    console.log('you dbcliked')
    icon.style.transform = 'translate(-50%,-50%) scale(1)'
    icon.style.opacity='1'
    setTimeout(()=>{
        icon.style.opacity = '0'
        icon.style.transform = 'translate(-50%,-50%) scale(.1) rotate(-90deg)'
    },1000)

})