
import  ss from './ProgressBar.module.scss';
import React, { useState } from 'react'

const Progress = ({title, title2, percentage}) => {


const [count,setCount] = useState(0)
const [style, setStyle] = React.useState({});

setTimeout(() => {

const newStyle = {

opacity: 1,

width: `${percentage}%`

}

setStyle(newStyle);

}, 200);
const increase = ()=>{
    setTimeout(() => {
        if(count < percentage)
            setCount(count+10)
    },200);
    return count
}
return (

<div className={ss.progress}>

<div className={ss.progressdone} style={style}>

<div className={ss.pg_title}>
{title}
<span></span>
{title2}
</div>

{increase()}%

</div>

</div>

)

}



export default Progress