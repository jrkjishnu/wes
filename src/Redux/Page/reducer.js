import { combineReducers } from 'redux';
import * as actions from './type'
const initialState = {
    loading: false,
    data : [],
    error : ''
}
const initialGlobalState = {
    loading: false,
    data : [],
    error : ''
}
export const pageDataReducer = combineReducers({
    page(state = initialState , action){    
            switch(action.type){
                case actions.FETCH_PAGE_REQUEST : return {
                    ...state,
                    loading:true
                }
                case actions.FETCH_PAGE_SUCCESS : return {
                    ...state,
                    loading : false,
                    data: action.payload,
                    error: ''
                }
                case actions.FETCH_PAGE_FAILURE : return {
                    ...state,
                    loading: false,
                    data : [],
                    error : action.payload
                }
    
                default : return state
    
            }
    },
    global(state = initialGlobalState,action){
        switch(action.type){
            case actions.FETCH_GLOBAL_REQUEST : return {
                ...state,
                loading:true
            }
            case actions.FETCH_GLOBAL_SUCCESS : return {
                ...state,
                loading : false,
                data: action.payload,
                error: ''
            }
            case actions.FETCH_GLOBAL_FAILURE : return {
                ...state,
                loading: false,
                data : [],
                error : action.payload
            }

            default : return state

        }
    }

}) 