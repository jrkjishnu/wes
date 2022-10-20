import axios from "axios"
import { globalDataFailure, globalDataRequest, globalDataSuccess, pageDataFailure, pageDataRequest, pageDataSuccess } from "../Redux"

export const fetchPages = ()=>{
    return (dispatch)=>{
      console.log("dispatch",dispatch);
        dispatch(pageDataRequest())
        axios.get(`${process.env.REACT_APP_API_URL}/api/pages?populate=*`,{ headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` } }).then((response)=>{
            dispatch((pageDataSuccess(response.data)))
          }).catch((error)=>{
            dispatch((pageDataFailure(error)))
          })
    }
}
