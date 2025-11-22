let animalDiv = document.querySelectorAll(".animal")
console.log(animalDiv)
let image = document.querySelectorAll("img")
animalDiv.forEach((item)=>{
   console.log(item)
   item.addEventListener('mouseenter',(dets)=>{
    item.childNodes[3].style.opacity= '1'

    // console.log(item.childNodes[3].)
    console.log('hellow')
   })
   item.addEventListener('mouseleave',(dets)=>{
    item.childNodes[3].style.opacity = '0'
   })
    item.addEventListener("mousemove",(dets)=>{
        item.childNodes[3].style.left = `${dets.x}px`
        // item.childNodes[3].style.top = `${dets.y}px`
    })
})