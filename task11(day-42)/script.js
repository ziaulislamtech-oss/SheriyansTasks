let a = 1;
let Incriment = document.querySelector('#Plusbtn')
let decriment = document.querySelector('#Minusbtn')
let h2 = document.querySelector('h2');
h2.innerHTML = a;
Incriment.addEventListener('click', ()=>{
    a++
    h2.innerHTML = a
})
decriment.addEventListener('click',()=>{
    a--
    h2.innerHTML = a
})
