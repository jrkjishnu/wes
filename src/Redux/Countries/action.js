import axios from 'axios'
import * as actions from './type'

export const countryDataRequest = () =>{
    return {
        type : actions.FETCH_COUNTRY_REQUEST
    }
}
export const countryDataSuccess = (data) =>{
    return {
        type : actions.FETCH_COUNTRY_SUCCESS,
        payload: data
    }
}
export const countryDataFailure = (error) =>{
    return {
        type : actions.FETCH_COUNTRY_FAILURE,
        payload:error
    }
}

export const availabilityDataRequest = () =>{
    return {
        type : actions.FETCH_COUNTRY_REQUEST
    }
}
export const availabilityDataSuccess = (data) =>{
    return {
        type : actions.FETCH_AVAILABILITY_SUCCESS,
        payload: data
    }
}
export const availabilityDataFailure = (error) =>{
    return {
        type : actions.FETCH_AVAILABILITY_FAILURE,
        payload:error
    }
}

export const selectedRegion = (data) =>{
    return {
        type : actions.SELECTED_REGION,
        payload: data
    }
}