import React from 'react'
import ss from "./Result.module.scss"
 import plane from "../../assets/images/aereo_wesii.svg";
import { useSelector } from 'react-redux';

const Result = ({details,resultData})=>{
   const planeImage = useSelector(state => state.pageDataReducer.global.data.data.attributes.Images.Plane_Image)

   const {regionName,country,continent} = details
   const monthSelector = useSelector(state => state.countryReducer.availability.month)
    return(
       <section className={ss.result} data-aos="zoom-in-up">
          <div className={ss.result_wrap}>
                <div className={ss.img_plane}>
                {planeImage &&(planeImage.data ? <img src={`${process.env.REACT_APP_API_URL}${planeImage.data.attributes.url}`} alt="aereo wesii"/>:
                 <img src={plane} alt="plane"/>)
                 }             </div>
                {monthSelector && <div className={ss.content_box}>
                   <p>{resultData.Success_First_Text}<b> {regionName} <span>(</span>{country}<span>)</span></b> {resultData.Success_Second_Text}</p>
                   <h2 className={ss.available}>{monthSelector} {resultData.Booked_Year}</h2>
                </div>}
                {continent.toString().toLowerCase() !== "europe" && monthSelector === '' && <div className={ss.content_box}>
                   <p>{resultData.OutofEurope_First_Text}</p>
                   <h2 className={ss.not_available}>{resultData.OutofEurope_Second_Text}</h2>
                </div> }
                {(monthSelector === '' && continent.toString().toLowerCase() === "europe") && <div className={ss.content_box}>
                   <p>{resultData.Datepassed_First_Text}</p>
                   <h2 className={ss.not_available}>{resultData.Datepassed_Second_Text}</h2>
                </div>}
             </div>    
       </section>
    )
}

export default Result