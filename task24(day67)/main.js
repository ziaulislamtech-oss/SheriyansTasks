
import mainLeft from "./left.js"
import mainRight from "./right.js"
const main=()=>{
    let mainDiv = React.createElement('div',{className:'mainDiv'},[mainLeft(),mainRight()])
    return mainDiv
}
export default main