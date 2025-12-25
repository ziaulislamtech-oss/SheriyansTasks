
const nav=()=>{
    let p1 = React.createElement('p',{className:'para'},'About Me',)
    let p2 = React.createElement('p',{className:'para'},'portfolio')
    let p3 = React.createElement('p',{className:'para',},'services')
    let img = React.createElement('img',{src:'./img/logo.png'})
    let button = React.createElement('button',{className:'btn'},'explore more')
    let leftDiv = React.createElement('div',{id:'leftDiv'},[img,p1,p2,p3])
    let navDiv = React.createElement('div',{id:'navBar'},[leftDiv,button])
    return navDiv
}

export default nav