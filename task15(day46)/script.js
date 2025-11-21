let icon = document.querySelector('i')
let parent = document.querySelector('.parent');
parent.addEventListener('dblclick',()=>{
    icon.style.opacity = '1'
    icon.style.transform = 'scale(1) translate(-50%,-50%) rotate(0deg) '
    setTimeout(()=>{
        icon.style.transform = 'scale(1) translate(-50%,-450%) rotate(90deg) '
    },800);
    setTimeout(()=>{
        icon.style.opacity ='0';
        
    },1000)
    setTimeout(()=>{
        icon.style.transform = 'scale(1) translate(-50%,-50%) scale(.1) rotate(-90deg) '
      

    },1300)


})