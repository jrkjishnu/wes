import React from 'react'
import { useSelector } from 'react-redux'
import ss from "./Footer.module.scss"
const Footer = ()=>{
   const footerData = useSelector(state => state.pageDataReducer.global.data.data.attributes.Footer)
    return(
       <section className={ss.footer}>
           <div className={ss.contain}>
             <div className={ss.copy}>
                 <p>{footerData.Copyright}  | <a href="/#"> {footerData.First_Link} </a>  |  <a href="/#">{footerData.Second_Link}</a>  </p>
             </div>
             <div className={ss.right_box}>
                <span>{footerData.Name}</span> <p> {footerData.Description}</p>
             </div>
          </div>
       </section>
    )
}

export default Footer