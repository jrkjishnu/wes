import React, { useEffect,useState } from 'react'
import About from '../../Components/About/About'
import Banner from '../../Components/banner/banner'
import TopButtton from '../../Components/bottomUp/BottomUp'
import Contact from '../../Components/Contact/Contact'
import Services from '../../Components/services/services'
import ss from "./home.module.scss"
import Header from '../../Components/header/header'
import Footer from '../../Components/Footer/Foooter'
import { useSelector } from 'react-redux'
// import { component } from '../../Utils/component'

const Home = ({planeImage,headerData,footerData})=>{
  const homeSelector = useSelector(state => state.pageDataReducer.page.data.data[0].attributes.Blocks)
  // const [homeData,setHomeData] = useState()
  // useEffect(()=>{
  //   const data = component(homeSelector)
  //   setHomeData(data[3])
  // },[homeSelector])
  const [componentIndex,SetComponentIndex] = useState([])
  useEffect(()=>{
    let temp = [] 
    homeSelector.forEach((element)=>{
      switch(element.__component)
      {
        case 'home.banner':
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
        {componentIndex.length !==0  && 
          <section className={ss.home}>
          {componentIndex[0] && <Banner bannerData={componentIndex[0]}/>}
          {componentIndex[1] && <Services servicesData = {componentIndex[1]}/>}
          {componentIndex[2] && <About aboutData={componentIndex[2]}/>}
          {componentIndex[3] && <Contact contactData = {componentIndex[3]}/>}
          <TopButtton />
        </section>}
        {<Footer/>}
        </>
        )
}

export default Home