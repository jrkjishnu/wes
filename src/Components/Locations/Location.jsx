import React from "react";
import ss from "./location.module.scss"
import LocationForm from '../LocationForm/LocationForm'
import Loader from '../../Components/Loader/Loader'
import Result from '../../Components/Result/Result'
import { Row, Col, } from "antd";
import { SizeMe } from 'react-sizeme'

import  ReactMap  from "../ReactMap/ReactMap";
import { useSelector } from "react-redux";
const Location = ({details,locationFormData,Loader_Image}) => {  
const showSelector = useSelector(state=>state.contactReducer.booking.show)
  return (
    <SizeMe>{({ size }) =>
    <section className={ss.location_sec}>
      <div  className={ss.container}>
        <div className={ss.black_bg}>
          <Row className={ss.row}>
          <Col id="myID" sm={24} md={12} lg={12} className={ss.form_box}>
          {
              showSelector === '' && <LocationForm details={details} locationFormData={locationFormData}/>
            }
            {
              (showSelector !== 'pending' && showSelector !== '' && locationFormData.Result) && <Result details={details} resultData={locationFormData.Result}/>
            }
            {
              showSelector === 'pending' && <Loader title="Loading..." percentage="100" Loader_Image={Loader_Image}/>
            }
            </Col>
            <Col  sm={24} md={12} lg={12} className={ss.form_box}>
            <div className={ss.location_map}>
                <ReactMap size={size} details={details}/>
            </div>
            </Col>
          </Row>
       
        </div>
    
      </div>
    </section>
    }</SizeMe>
  );
};

export default Location;