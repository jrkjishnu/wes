import React, { useEffect, useState } from "react";
import ss from "./about.module.scss";
import { Row, Col } from "antd";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useSelector } from "react-redux";
import { component } from "../../Utils/component";


const About = ({aboutData}) => {


  // const aboutSelector = useSelector(state => state.pageDataReducer.page.data.data[0].attributes.Blocks)
  // const [aboutData,setaboutData] = useState()
  // useEffect(()=>{
  //   const data = component(aboutSelector)
  //   setaboutData(data[2])
  // },[aboutSelector])

  const [show,setShow] = useState(false)
  function onChange (isVisible) {
    if(isVisible)
      setShow(true)
  }

  const counterUp = (limit,duration,decimal)=>{

    const count = <CountUp
      className="account-balance"
      start={0}
      end={limit}
      duration={duration}
      useEasing={true}
      separator=","
      // decimals={decimal}
    />
    return count;
  }

  return (
    <section className={ss.about}>
      {aboutData && <div className={ss.container}>
        <div className={ss.black_bg}>
          <Row>
            <Col sm={24} md={16} lg={12}>
              <div className={ss.content_wrap}>
                <div className={ss.heading} dangerouslySetInnerHTML={{__html:aboutData.Title}}>
                  
                </div>
                <div className={ss.abt_cont} dangerouslySetInnerHTML={{__html:aboutData.Description}} >
                </div>
                <VisibilitySensor onChange={onChange}>
                <div className={ss.list_box}>
                  <div className={ss.count_box}>
                    <div className={ss.num}>
                     <h2> <span className={ss.plus}>+</span>{show ? counterUp(`${aboutData.Experience}`,2):10}</h2>
                    </div>
                     <div className={ss.number_title}>
                      <h3 dangerouslySetInnerHTML={{__html:aboutData.Clients_Text}}></h3>
                     </div>
                  </div>
                  <div className={ss.count_box}>
                  <div className={ss.num}>
                    <h2><span className={ss.plus}>+</span>{show ? counterUp(`${aboutData.Inspections}`,2):10}</h2>
                    </div>
                    <div className={ss.number_title}>
                    <h3 dangerouslySetInnerHTML={{__html:aboutData.Plants_Text
                    }}></h3>
                    </div>
                  </div>
                  <div className={ss.count_box}>
                  <div className={ss.num}>
                    <h2><span className={ss.plus}>+</span>{show ? counterUp(`${aboutData.Customers}`,3):10}%</h2>
                    </div>
                    <div className={ss.number_title}>
                    <h3 dangerouslySetInnerHTML={{__html:aboutData.Inspected_Text
                    }}></h3>
                    </div>
                  </div>
                </div>
                </VisibilitySensor>
              </div>
            </Col>
          </Row>
        </div>
      </div>}
    </section>
  );
};

export default About;
