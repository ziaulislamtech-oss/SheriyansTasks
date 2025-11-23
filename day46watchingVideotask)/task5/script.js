let data = '';
let arr = [
    {
        dp:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D,"
    },
    {
        dp: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story : 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        dp: 'https://images.unsplash.com/photo-1688888745596-da40843a8d45?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story: 'https://images.unsplash.com/photo-1688888745596-da40843a8d45?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        dp:'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        story: 'https://images.unsplash.com/photo-1691289435414-7301d7164319?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
]
let cluttor = '';
let stories = document.querySelector('#top')
arr.forEach((val,idx)=>{
    // console.log(val)
    cluttor+=`<div class="story">
    <img id="${idx}" src='${val.dp}' alt="">
    </div>`
})
stories.innerHTML = cluttor;
let userStory = document.querySelector('.fullScreen')
stories.addEventListener('click',(dets)=>{
    let goldenValue = arr[dets.target.id].story;
    userStory.style.backgroundImage = `url(${goldenValue})`
    userStory.style.display = 'block'
    setTimeout(()=>{
       userStory.style.display = 'none'
   },1000)
})