let allElems = document.querySelectorAll('.elem')
// console.log(allElems)
let fullElem = document.querySelectorAll('.fullElem')
allElems.forEach((elem)=>{
    elem.addEventListener('click',function(){
        console.log(fullElem[elem.id])
        // console.log('i am clicked')
        // console.log(fullElem[elem.id])
        
    })

})
// console.log(fullElem[0])