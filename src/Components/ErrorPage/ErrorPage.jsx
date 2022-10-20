import React from 'react'
import ss from "./errorpage.module.scss";
import plane from "../../assets/images/loader_plane.png";
import cloud from "../../assets/images/cloud1.png";
import cloud2 from "../../assets/images/cloud2.png";
import cloud3 from "../../assets/images/cloud3.png";
import { useHistory } from 'react-router-dom';

const ErrorPage = () => {

let history = useHistory()

  return (
    <section className={ss.error} >
   
 
         <div className={ss.cloud_container}>
         <div className={ss.cloud}>
           <img src={cloud} alt="cloud1" />
         </div>
         <div className={ss.cloud}>
           <img src={cloud2} alt="cloud2" />
         </div>
         <div className={ss.cloud}>
           <img src={cloud3} alt="cloud3" />
         </div>
         </div>
         <div className={ss.error_wrap}>
      <div className={ss.img_plane} >
            <img src={plane} alt="wesii" />
         </div>
         <div className={ss.content}>
            <h2>Oops</h2>
            <p>We can't find the page that you're looking for</p>
            <button onClick={()=>history.push('/')}>Back to home</button>
         </div>
      </div>

    </section>
  );
};

export default ErrorPage;
