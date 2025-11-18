let arr = ['hellow i am Zia-Ul-Islam','I am a frontend developer, sheryian coding school is the best'];
let main = document.querySelector('main');
let button = document.querySelector('button');
button.addEventListener('click',()=>{
    let div = document.createElement('div')
    let c1= Math.floor(Math.random()*255);
    let c2= Math.floor(Math.random()*255);
    let c3= Math.floor(Math.random()*255);
    let pt= Math.floor(Math.random()*100);
    let pl= Math.floor(Math.random()*100);
    let R= Math.floor(Math.random()*360);
    console.log(div)
    div.style.width = '100px';
    div.style.height= '100px';
    console.log(c1,c2,c3)
    div.style.backgroundColor=`rgb(${c1},${c2},${c3})`;
    div.style.position ='absolute'
    div.style.top = `${pt}%`
    div.style.left = `${pl}%`
    div.style.rotate = `${R}deg`
    button.style.backgroundColor = `rgb(${c1},${c2},${c3})`

    
    main.append(div)
    
})