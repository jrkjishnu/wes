import React, { useEffect, useState } from "react";
import ss from "./services.module.scss";
import { Row, Col } from "antd";
import monitoring from '../../assets/images/monitoring.png';
import photogrammetry from '../../assets/images/photogrammetry.png';
import { useSelector } from "react-redux";
import { component } from "../../Utils/component";

const Services = ({servicesData}) => {

  // const serviceSelector = useSelector(state => state.pageDataReducer.page.data.data[0].attributes.Blocks)
  // const [servicesData,setServiceData] = useState()
  // useEffect(()=>{
  //   const data = component(serviceSelector)
  //   setServiceData(data[1])
  // },[serviceSelector])

  return (
    <section className={ss.services}>
      {servicesData && <div className={ss.container}>
        <div className={ss.black_bg} >
         <Row>
        <Col span={24}>
        <div className={ss.heading}>
        <div  dangerouslySetInnerHTML={{__html:servicesData.Title}}>
        </div>
                <div className={ss.discp}>
                  <p>{servicesData.Description}</p>
                </div>
         </div>
        </Col>
       </Row>
       <Row className={ss.service_card} gutter={30}>
             <Col sm={24} md={24} lg={12}>
           
                   <div className={ss.card_box} 
                   data-aos="fade-right"
                   data-aos-offset="300"
                   data-aos-easing="ease-in-sine">
                   <figure>
{servicesData.Monitoring_Image.data ?<img src={`${process.env.REACT_APP_API_URL}${servicesData.Monitoring_Image.data.attributes.url}`} alt="monitoring" />
:<img src={monitoring} alt="Monitoring"/>}     
              </figure>
                   <figcaption>
                       <span>{servicesData.Photovoltaic}</span>
                       <h3>{servicesData.Monitoring}</h3>
                      <div className={ss.content}>
                      <p>
                      {servicesData.Monitoring_First_Description}
                       </p>
                       <p>
                          {servicesData.Monitoring_Second_Description}
                       </p>
                      </div>
                   </figcaption>
                   </div>
                   </Col>
                   <Col sm={24} md={24} lg={12}>
                   <div className={ss.card_box}
                   data-aos="fade-left"
                   data-aos-offset="300"
                   data-aos-easing="ease-in-sine">
                   <figure>
                   {servicesData.Photogrammetry_Image.data ?<img src={`${process.env.REACT_APP_API_URL}${servicesData.Photogrammetry_Image.data.attributes.url}`} alt="Photogrammetry" />
:<img src={photogrammetry} alt="Photogrammetry"/>}  
                   </figure>
                   <figcaption>
                       <span>{servicesData.Photovoltaic}</span>
                       <h3>{servicesData.Photogrammetry}</h3>
                      <div className={ss.content}>
                      <p>
                      {servicesData.Photogrammetry_First_Description}
                       </p>
                       <p>
                      {servicesData.Photogrammetry_Second_Description}
                       </p>
                      </div>
                   </figcaption>
                   </div>
             
           </Col>
       </Row>
      </div>
      </div>}
    </section>
  );
};

export default Services;
