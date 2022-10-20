import React,{ useState} from "react";
import ss from "./banner.module.scss";
import { Row, Col } from "antd";
import { Tabs } from "antd";
// import banner from "../../assets/images/livello.svg";
// import plane from "../../assets/images/aereo-wesii.svg";
// import location from"../../assets/images/location3d.svg";
// import success from"../../assets/images/tick.svg";
// import graph from"../../assets/images/graph.svg";
import banner from "../../assets/images/impianti.svg";
import wing from "../../assets/images/wing.svg";
 import plane from "../../assets/images/aereo-wesii.svg";
import location from"../../assets/images/location3d.svg";
import success from"../../assets/images/tick.svg";
import graph from"../../assets/images/graph.svg";
import SearchLocation from "../SearchLocation/SearchLocation";
import { useSelector } from "react-redux";
// import {component} from '../../Utils/component' 
const { TabPane } = Tabs;

const Banner = ({bannerData}) => {
  // const bannerSelector = useSelector(state => state.pageDataReducer.page.data.data[0].attributes.Blocks)
  // const [bannerData,setBannerData] = useState()
  // useEffect(()=>{
  //   const data = component(bannerSelector)
  //   setBannerData(data[0])
  // },[bannerSelector])
  const planeImage = useSelector(state => state.pageDataReducer.global.data.data.attributes.Images.Plane_Image)
  const [active,setActive] = useState('1')
  const activeTab = (activeKey)=>{
    setActive(activeKey)
  }
  return (
    <section className={ss.banner}>
      {bannerData && <div className={ss.container}>
        <div className={ss.black_bg}>
        
          <Row>
            <Col sm={24} md={12} lg={12}>
              <div className={ss.heading} dangerouslySetInnerHTML={{ __html: bannerData.Title }}>
              </div>
              <div className={ss.tab_sec}>
                <Tabs defaultActiveKey="1" onChange={activeTab}>
                  <TabPane tab={`${bannerData.About_Tab}`} key="1">
                    < div  dangerouslySetInnerHTML={{ __html: bannerData.About_Tab_Description }}>
                    </div>
                    <p className={ss.last_cont}>{bannerData.About_Tab_Second_Description}</p>
                    <div dangerouslySetInnerHTML={{ __html: bannerData.About_Tab_Benefit_Text}}></div>
                  </TabPane>
                  <TabPane tab={`${bannerData.Working_Tab}`} key="2">
                    < div dangerouslySetInnerHTML={{ __html: bannerData.Working_Tab_Description }}>
                    </div>
                     <p className={ss.last_cont}>{bannerData.Working_Tab_Second_Description}</p>
                    <div dangerouslySetInnerHTML={{ __html: bannerData.Working_Tab_Benefit_Text}}></div>
                  </TabPane>
                </Tabs>
              </div>
            </Col>
            <Col sm={24} md={12} lg={12}>
              
              {active === '1' ? <div  className={ss.banner_contain}>
                
                <div className={ss.main_banner}>
                  {/* <img src={`${bannerData.Banner_Image.data &&`${process.env.REACT_APP_API_URL}${bannerData.Banner_Image.data.attributes.url}`}`} alt="banner" /> */}
                  <div className={ss.imgwrap}>
                  <div className={ss.image_box}>
                   {bannerData.Banner_Image.data ? <img src={`${process.env.REACT_APP_API_URL}${bannerData.Banner_Image.data.attributes.url}`} alt="impianti"/>:
                   <img src={banner} alt="banner"/>
                   }
                  </div>
                  <div className={ss.wings_container}>
                     <div className={ss.wing}>
                     {bannerData.Wings_Image.data ?<img src={`${process.env.REACT_APP_API_URL}${bannerData.Wings_Image.data.attributes.url}`} alt="wing" />
                       :<img src={wing} alt="wing" />}
                     </div>
                  </div>
                  <div className={ss.wings_container} id={ss.wingcontain2}>
                     <div className={ss.wing}>
                     {bannerData.Wings_Image.data ?<img src={`${process.env.REACT_APP_API_URL}${bannerData.Wings_Image.data.attributes.url}`} alt="wing" />
                       :<img src={wing} alt="wing" />}                     </div>
                  </div>
                  <div className={ss.wings_container} id={ss.wingcontain3}>
                     <div className={ss.wing}>
                     {bannerData.Wings_Image.data ?<img src={`${process.env.REACT_APP_API_URL}${bannerData.Wings_Image.data.attributes.url}`} alt="wing" />
                       :<img src={wing} alt="wing" />}
                     </div>
                  </div>
              
                  </div>
                </div>
                <div className={ss.plane} >
                 {planeImage &&(planeImage.data ? <img src={`${process.env.REACT_APP_API_URL}${planeImage.data.attributes.url}`} alt="aereo wesii"/>:
                 <img src={plane} alt="plane"/>)
                 }
               </div>
              </div>:
               <div className={ss.second_tab}>
                 <div className={ss.box_list}>
                <div className={ss.tab_box} id={ss.list_one}>
                  <div className={ss.left_box} id={ss.arrow}>
                    <span>1</span>
                    <div className={ss.img_box}>
                      <div className={ss.icon_box}>
                      {       bannerData.Location_Image.data ? 
 <img src={`${process.env.REACT_APP_API_URL}${bannerData.Location_Image.data.attributes.url}`} alt="CARICA I TUOI IMPIANTI" />:
<img src={location} alt="location"/>
}
                      </div>
                    </div>
                  </div>
                  <div className={ss.right_box}>
                   <div className={ss.cont_box}>
                   <h3>{bannerData.Location_Title}</h3>
                    <p>{bannerData.Location_Description}</p>
                   </div>
                  </div>
                </div>
                </div>
                <div className={ss.box_list}>
                <div className={ss.tab_box} id={ss.list_two}>
                  <div className={ss.left_box} id={ss.arrow}>
                    <span>2</span>
                    <div className={ss.img_box}>
                    <div className={ss.icon_box}>
                      {       bannerData.Service_Image.data ?  <img src={`${process.env.REACT_APP_API_URL}${bannerData.Service_Image.data.attributes.url}`} alt="CARICA I TUOI IMPIANTI" />:
<img src={success} alt="location"/>
} 
                    </div>
                    </div>
                  </div>
                  <div className={ss.right_box}>
                   <div className={ss.cont_box}>
                   <h3>{bannerData.Service_Title}</h3>
                    <p>{bannerData.Service_Description}</p>
                   </div>
                  </div>
                </div>
                </div>
             
                <div className={ss.tab_box} id={ss.list_three}>
                  <div className={ss.left_box}>
                    <span>3</span>
                    <div className={ss.img_box}>
                    <div className={ss.icon_box}>
                    {       bannerData.Analysis_Image.data ?  <img src={`${process.env.REACT_APP_API_URL}${bannerData.Analysis_Image.data.attributes.url}`} alt="ACCEDI ALLE ANALISI" />:
<img src={graph} alt="graph"/>
} 
                    </div>
                    </div>
                  </div>
                  <div className={ss.right_box}>
                   <div className={ss.cont_box}>
                   <h3>{bannerData.Analysis_Title}</h3>
                    <p>{bannerData.Analysis_Description}</p>
                   </div>
                  </div>
                </div>
              </div>}
            </Col>
            
          </Row>
          <SearchLocation searchData={bannerData.Search?bannerData.Search:''}/>
        </div>
      </div>}
    </section>
  );
};

export default Banner;