let box = document.querySelector(".box")
let button = document.querySelector("#btn")
button.addEventListener("click",()=>{
    let num1 = Math.floor(Math.random()*255)
    let num2 = Math.floor(Math.random()*255)
    let num3 = Math.floor(Math.random()*255)
    console.log(num1,num2,num3)
    box.style.backgroundColor = `rgb(${num1},${num2},${num3}) `
    button.style.backgroundColor = `rgb(${num1},${num2},${num3})`
})