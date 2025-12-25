
import main from './main.js'
import nav from './nav.js'
const parent=()=>{
    return React.createElement('div',{class:'parent'},[nav(),main()])
}
export default parent