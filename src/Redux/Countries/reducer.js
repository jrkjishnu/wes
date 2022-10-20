import { combineReducers } from 'redux';
import * as actions from './type'
const initialState = {
    loading: false,
    data : [],
    error : '',
    month : ''
}
const region = {
    details : ''
}

export const countryReducer = combineReducers({
    country(state = initialState , action){    
            switch(action.type){
                case actions.FETCH_COUNTRY_REQUEST : return {
                    ...state,
                    loading:true
                }
                case actions.FETCH_COUNTRY_SUCCESS : return {
                    ...state,
                    loading : false,
                    data: action.payload,
                    error: ''
                }
                case actions.FETCH_COUNTRY_FAILURE : return {
                    ...state,
                    loading: false,
                    data : [],
                    error : action.payload
                }
    
                default : return state
    
            }
    },
    availability(state = initialState, action){
        switch(action.type){
            case actions.FETCH_AVAILABILITY_REQUEST : return {
                ...state,
                loading:true
            }
            case actions.FETCH_AVAILABILITY_SUCCESS : return {
                ...state,
                loading : false,
                data: action.payload,
                error: '',
                month : action.payload
            }
            case actions.FETCH_AVAILABILITY_FAILURE : return {
                ...state,
                loading: false,
                data : [],
                error : action.payload
            }

            default : return state

        }
    },
    region(state = region, action){
        switch(action.type){
            case actions.SELECTED_REGION : return {
                ...state,
                details: action.payload
            }
            default : return state

        }
    }

}) 