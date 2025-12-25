const mainLeft=()=>{
    let p200 = React.createElement('p',{className:'p200'},'+200')
    let p200Text = React.createElement('p',{className:'p200Text'},'porjects completed')
    // let Plus = React.createElement('p',{className:'plus'},'+')
    let p50 = React.createElement('p',{className:'p50'},'+50')
    let p50Text = React.createElement('p',{className:'p50Text'},'Startup raised')
    let Div200 = React.createElement('div',{className:'div200'},[p200,p200Text]) 
    let Div50 = React.createElement('div',{className:'div50'},[p50,p50Text])

    let upperDiv= React.createElement('div',{className:'leftUpperDiv'},[Div200,Div50])
    let h1Hello = React.createElement('h1',{id:'hello'},'Hello');
    let helloBtmP = React.createElement('p',{className:'para'},'-It,s D.Nova a design wizerd')
    let middleDiv = React.createElement('div',{className:'middleDiv'},[h1Hello,helloBtmP])

    let BottomP = React.createElement('p',{className:'bottomP'},'Scroll Down');
    let bottomDiv = React.createElement('div',{className:'bottomDiv'},[BottomP])
    let mainLeftDiv = React.createElement('div',{className:'mainLeftDiv'},[upperDiv,middleDiv,bottomDiv])
    return mainLeftDiv
}
export default mainLeft