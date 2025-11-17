let arr =[
    {
        team : 'Peshawar Zalmi' ,
        primary : 'yellow',
        secondary : 'black',
        tropies : 1,
        Captin : 'Babar Azam',
        captinImg : './img/Babar.jfif'
    },
    {
        team : 'Multan Sultan',
        primary : ' Dark Charcoal',
        secondary : 'black',
        tropies : 1,
        Captin : 'Muhammand Rizwan',
        captinImg : './img/Mohammad Rizwan.jfif'
        
    },
    {
        team : 'Lahore Qalandar',
        primary : 'green',
        secondary : 'red',
        tropies : 3,
        Captin : 'Shaheen Shah Afridi',
        captinImg : './img/Shaheen afridi.jfif'
        
    },
    {
        team : 'Islamabad United',
        primary : 'red',
        secondary : 'yellow ',
        tropies  : 3,
        Captin : 'Shadab Khan',
        captinImg : './img/Shadab Khan - Biography, Height & Life Story _ Super Stars Bio.jfif'
        
    },
    {
        team : 'Quetta Gladiators',
        primary : 'Golder',
        secondary : 'Purple',
        tropies : 1,
        Captin : 'Saud shakeel',
        captinImg : './img/sauid shakeel.jfif'
    }
]
let button = document.querySelector("#guessBtn");
let h1 = document.querySelector("#winnerTeam");
let h2Captin = document.querySelector("#captin");
let h2Tropies = document.querySelector("#tropies");
let parentDiv = document.querySelector(".parent")
let body = document.querySelector('body')
let captinImg = document.querySelector("#captinImg");
button.addEventListener('click',()=>{
    let num = Math.floor(Math.random()*arr.length)
    console.log(arr[num])
    console.log("button Clicked")
    h1.textContent = arr[num].team
    h2Captin.textContent =  `Captin : ${arr[num].Captin}`;
    h2Tropies.textContent = `Tropies Owned : ${arr[num].tropies}`
    body.style.backgroundColor = arr[num].primary
    parentDiv.style.backgroundColor = arr[num].secondary
    parentDiv.style.color ='white';
    captinImg.src = arr[num].captinImg
})