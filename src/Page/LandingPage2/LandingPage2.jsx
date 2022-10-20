import React, { useEffect,useState } from 'react'
import About from '../../Components/About/About'
// import Banner from '../../Components/banner/banner'
import TopButtton from '../../Components/bottomUp/BottomUp'
import Contact from '../../Components/Contact/Contact'
import Location from '../../Components/Locations/Location'
import Services from '../../Components/services/services'
import ss from "./LandingPage2.module.scss"
import { useHistory } from "react-router-dom";
import Header from '../../Components/header/header'
import Footer from '../../Components/Footer/Foooter'
import { useSelector } from 'react-redux'

const LandingPage2 = ({Loader_Image})=>{
  const homeSelector = useSelector(state => state.pageDataReducer.page.data.data[1].attributes.Blocks)
  let history = useHistory();
  useEffect(()=>{
   
      if(!history.location.state){
      history.push("/")
      }
  },[history])
  const [componentIndex,SetComponentIndex] = useState([])
  useEffect(()=>{
    let temp = [] 
    homeSelector.forEach((element)=>{
      switch(element.__component)
      {
        case 'search.location-from':
          return temp[0] = element;
        case 'home.services':
          return temp[1] = element;
        case 'home.about':
          return temp[2] = element;
        case 'home.contact':
          return temp[3] = element;
        default: return temp;
      }
    })
    SetComponentIndex(temp)
  },[homeSelector])

  return(
    <>
      {<Header/>}
    <section className={ss.home}>
      {(history.location.state && componentIndex.length !== 0) && <> 
      {componentIndex[0] && <Location details={history.location.state.details} locationFormData={componentIndex[0]} Loader_Image={Loader_Image}/>}
      {componentIndex[1] && <Services servicesData = {componentIndex[1]}/>}
      {componentIndex[2] && <About aboutData={componentIndex[2]}/>}
      {componentIndex[3] && <Contact contactData = {componentIndex[3]}/>}
      <TopButtton /></>}
    </section>
    {<Footer/>}
    </>
    )
}

export default LandingPage2