// let p = document.querySelector('p')
// let pText = p.innerText;
// p.addEventListener('mouseenter',()=>{
    //  const textGene=  setInterval(() => {
        //     let splitedChar = characters.split('');
        //    const str= pText.split('').map((val,idx)=>{
//     return splitedChar[Math.floor(Math.random()*53)]
//    }).join('')
//    pText.innerText = str
//    p.innerText = str
//    console.log(str)
//    }, 100);
//    p.addEventListener('mouseout',()=>{
//        clearInterval(textGene)
// })

// })
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let p = document.querySelector('p')
const text = p.innerText;
let iteraton = 0;
function randomText(){
    let str = text.split('').map((char,idx)=>{
        if(idx<iteraton) return char
        return characters.split('')[Math.floor(Math.random()*53)]
    }).join('')
    // console.log(str)
    p.innerText = str
    iteraton+=0.5
}

p.addEventListener('mouseenter',()=>{

    setInterval(randomText,100)
})
