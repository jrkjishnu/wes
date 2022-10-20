import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import ss from "./loader.module.scss";
// import plane from "../../assets/images/loader_plane.png";

const Loader = ({ percentage,title}) => {
  const [count, setCount] = useState(0);
  const [style, setStyle] = React.useState({});
  const Loader_Image = useSelector(state => state.pageDataReducer.global.data.data.attributes.Images.Loader_Image)
  useEffect(()=>{
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
  
        width: `${100}%`,
      };
  
      setStyle(newStyle);
    }, 150);
  },[])
  
  useEffect(()=>{
    setTimeout(() => {
      if (count < 100) setCount(count + 10);
    }, 220);
    return count;
  },[count])

  return (
    <section className={ss.loader} data-aos="zoom-in">
      <div className={ss.container}>
        <div className={ss.loader_wrap}>
          <div className={ss.img_plane}>
          {Loader_Image &&<img src={`${Loader_Image.data &&`${process.env.REACT_APP_API_URL}${Loader_Image.data.attributes.url}`}`} alt="wesii" />
} 
          </div>

          <div className={ss.progress}>
            <div className={ss.progressdone} style={style}>
              <div className={ss.pg_title}>
                {title}
              </div>
              {count}%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loader;
