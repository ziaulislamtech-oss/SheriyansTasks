let PersonStatus = document.querySelector('h5')
let button = document.querySelector("#btn")
let flag = false;
button.addEventListener('click',()=>{
 if(flag===false){
    flag=true
    button.textContent = 'Remove'
    PersonStatus.textContent = 'Friend'
    PersonStatus.style.color='green';
}
else{
    flag =false
    button.textContent = 'Add Friend'
    PersonStatus.textContent = 'Stranger'
    PersonStatus.style.color='red'
 }
})
