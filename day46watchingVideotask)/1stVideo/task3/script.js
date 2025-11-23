let main = document.querySelector("main")
let cursor = document.querySelector(".cursor")
main.addEventListener('mousemove',(events)=>{
    cursor.style.left = `${events.x}px`;
    cursor.style.top = `${events.y}px`
})