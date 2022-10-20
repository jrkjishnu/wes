import React from 'react'
import  ss from './header.module.scss';
import mainlogo from '../../assets/images/wesii_logo.svg';
import { Button } from 'antd';
import Progress from '../ProgressBar/ProgressBar';
import { useHistory } from 'react-router-dom';
import { scrollIntoView } from "seamless-scroll-polyfill";
import { useSelector } from 'react-redux';

const Header = ()=>{

  const headerData = useSelector(state => state.pageDataReducer.global.data.data.attributes.Header)
  const handleClick = ()=>{
    scrollIntoView(document.getElementById("contact"), { behavior: "smooth", block: "center", inline: "center" });
    }
  let history = useHistory()
    return (
      <header>
        <div className={ss.top_bar}>
            <div className={ss.logo}>
{        headerData.Logo.data ?      <img src={`${process.env.REACT_APP_API_URL}${headerData.Logo.data.attributes.url}`} alt="logo" onClick={()=>history.push("/")}/>
: <img src={mainlogo} alt="logo" onClick={()=>history.push("/") }/>}             
            </div>
            <div className={ss.center_box}>
            <div className={ss.progress}>
              <Progress title={`${headerData.Loader_First_Text}`} title2={`${headerData.Loader_Second_Text}`} percentage="50"/>
            </div>
            </div>
            <div className={ss.box_right}>
              <div className={ss.top_button}>
                <Button className={ss.btn_top} onClick={handleClick} >{headerData.Talk_To_An_Expert_Button}</Button>
              </div> 
            </div>
        </div>
      </header>
    );
}

export default Header