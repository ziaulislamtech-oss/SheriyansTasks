function openFeatures() {
    let allElems = document.querySelectorAll('.elem')
    let allElemsFullPages = document.querySelectorAll('.fullElem');
    let allFullElemsBackBtn = document.querySelectorAll('.back')
    let fullElem = document.querySelectorAll('.fullElem')
    allElems.forEach((elem) => {
        elem.addEventListener('click', function () {
            allElemsFullPages[elem.id].style.display = 'block'

        })

    })
    allFullElemsBackBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            allElemsFullPages[elem.id].style.display = 'none'
        })
    })
}

let currentTask=[]
let allTaskList = localStorage.getItem('allTaskList')
let abc = localStorage.getItem('currentTask')
if(localStorage.getItem('currentTask')){
    console.log('task list is full');
    currentTask = JSON.parse(localStorage.getItem('currentTask'))
}else{
    // localStorage.setItem('currentTask',currentTask)
    console.log('hello')
    localStorage.setItem('currentTask',currentTask)
}


openFeatures()
let form = document.querySelector('.addTask form')
let taskInput = document.querySelector('.addTask form #task-input');
let taskDetailsInput = document.querySelector('.addTask form textarea')
let taskCheckbox = document.querySelector('.addTask form #check')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    currentTask.push({
        task:taskInput.value,
        details :taskDetailsInput.value,
        imp : taskCheckbox.checked
    })
    localStorage.setItem('currentTask',JSON.stringify(currentTask))
    console.log(currentTask)
    task:taskInput.value = '';
    details :taskDetailsInput.value= ''
    imp : taskCheckbox.checked = false
    renderTask()

})

function renderTask(){
    let allTasks = document.querySelector('.allTask')
let sum = '';
currentTask.forEach((elem,idx)=>{
    sum = sum + ` <div class="task">
            <h5>${elem.task}<span class=${elem.imp}>imp</span></h5>
          <button id=${idx}>Mark as Completed</button>
          </div>`
})
allTasks.innerHTML = sum;
}
renderTask()
let markCompletedBtn = document.querySelectorAll('.task button')
// console.log(markCompletedBtn)
markCompletedBtn.forEach((btn,idx)=>{
    btn.addEventListener('click',()=>{

        console.log(currentTask[btn.id])
    })
})