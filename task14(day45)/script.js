let button = document.querySelector("#btn");
let grow = 1;
let h2grow = document.querySelector("#grow") 
let progressBar = document.querySelector(".downloader");
let completionMessage = document.querySelector("#complitionMsg")
console.log(completionMessage)
console.log(progressBar)


let num =  Math.floor(Math.random()*10) +30
button.addEventListener('click',()=>{
        console.log(num)
        button.style.pointerEvents = 'none'
        console.log(h2grow)
        let prgBar = setInterval(()=>{
            progressBar.style.width = `${grow}%`
            h2grow.textContent = `${grow}%`
            ++grow
        },num)
        setTimeout(()=>{
            clearInterval(prgBar)
            button.textContent = 'Downloaded'
        },num*100)
    })
