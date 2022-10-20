import axios from 'axios'
import * as actions from './type'

export const pageDataRequest = () =>{
    return {
        type : actions.FETCH_PAGE_REQUEST
    }
}
export const pageDataSuccess = (data) =>{
    return {
        type : actions.FETCH_PAGE_SUCCESS,
        payload: data
    }
}
export const pageDataFailure = (error) =>{
    return {
        type : actions.FETCH_PAGE_FAILURE,
        payload:error
    }
}

export const globalDataRequest  = () =>{
    return {
        type : actions.FETCH_GLOBAL_REQUEST
    }
}

export const globalDataSuccess = (data) =>{
    return {
        type : actions.FETCH_GLOBAL_SUCCESS,
        payload : data
    }
}

export const globalDataFailure  = (error) =>{
    return {
        type : actions.FETCH_GLOBAL_FAILURE,
        payload : error
    }
}