import axios from "axios"
import { availabilityDataFailure, availabilityDataRequest, availabilityDataSuccess, countryDataFailure, countryDataRequest, countryDataSuccess, selectedRegion} from "../Redux"
import { bookingDataFailure, bookingDataRequest, bookingDataSuccess, contactDataFailure, contactDataRequest, contactDataSuccess, showResult } from "../Redux/Contact/action"
import Notification from '../Utils/Notification'


export const fetchCountries = ()=>{
    const countryData = []
    return (dispatch)=>{
        dispatch(countryDataRequest())
        axios.get(`${process.env.REACT_APP_API_URL}/api/countries?populate=*`,{ headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` } }).then((response)=>{
            response.data.data.forEach(data => {
                countryData.push({
                  value: data.attributes.countryname,
                  region: data.attributes.regions? data.attributes.regions.data:[],
                  id: data.id,
                  countrycode: data.attributes.CountryCode? data.attributes.CountryCode:[],
                  continent: data.attributes.continent.data? data.attributes.continent.data.attributes.continent:[]
                })
            });
            dispatch((countryDataSuccess(countryData)))
          }).catch((error)=>{
            Notification('error','Oops! Something went wrong!','Please try again')
            dispatch((countryDataFailure(error)))
          })
    }
  }
  