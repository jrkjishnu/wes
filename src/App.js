import  ss from './App.module.scss';
import Routes from './Routes';
import React,{useEffect,useState} from 'react'
import ErrorPage from './Components/ErrorPage/ErrorPage'
import { useSelector,useDispatch } from 'react-redux'
import { fetchPages,fetchGlobalPages } from './Api/pages';


function App() {
  const [data,setData] = useState([])
  const [globalData,setGlobalData] = useState()
  const [error,setError] = useState(false)
  // useEffect(()=>{
  //   axios.get(`${process.env.REACT_APP_API_URL}/api/pages?populate=*`,{ headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` } }).then((response)=>{
  //     setData(response.data)
  //   }).catch((error)=>{
  //     setError(true)
  //   })
  // },[])
  // useEffect(()=>{
  //   axios.get(`${process.env.REACT_APP_API_URL}/api/global?populate=*`,{ headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` } }).then((response)=>{
  //     setGlobalData(response.data.data.attributes)
  //     // setLoader2(true)
  //   }).catch((error)=>{
  //     setError(true)

  //   })
  // },[])
  // useEffect(()=>{
  //   dispatch(fetchCountries())
  // },[])
  const dispatch = useDispatch()
  const selector = useSelector(state=>state)
  useEffect(()=>{
    dispatch(fetchPages())
    dispatch(fetchGlobalPages())
  },[])
  useEffect(()=>{
    setData(selector.pageDataReducer.page.data)
    setGlobalData(selector.pageDataReducer.global.data)
    setError(selector.pageDataReducer.page.error || selector.pageDataReducer.global.error)
  },[selector])
  return (
   <div className={ss.App}>
    {(data.data && globalData.data) && <div className={ss.main_bg}>
       <div className={ss.bottom_bg}>
        <div className={ss.main_content}>
         <Routes data={data} globalData={globalData.data.attributes}/>
     </div>
     </div>
     </div>}
     {error  && <>
     <ErrorPage />
     </>}
   </div>
  );
}

export default App;