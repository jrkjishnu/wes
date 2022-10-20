import React from 'react'
import ss from './BottomUp.module.scss'
const TopButtton = ()=>{

const [position, setPosition] = React.useState({top: 0, left: 0})

React.useEffect(() => {

window.scroll({

top: position.top,

left: position.left,

behavior: 'smooth'

})

})

const scrollTop = React.useRef()

return(

    <>
    <div className={ss.btn_contain}>
        <div onClick={() => setPosition({...position, position: {top: 0, left: 0}})} className={ss.btn_top} ref={scrollTop}>
          
        </div>
    </div>
    
    </>
    
    )
    
    }
    
    export default TopButtton