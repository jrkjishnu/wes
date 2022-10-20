import { combineReducers } from 'redux';
import * as actions from './type'
const initialState = {
    loading: false,
    data : [],
    error : '',
}

const bookingState = {
    show: ''
}

export const contactReducer = combineReducers({
    contact(state = initialState , action){    
            switch(action.type){
                case actions.ADD_CONTACT_REQUEST : return {
                    ...state,
                    loading:true
                }
                case actions.ADD_CONTACT_SUCCESS : return {
                    ...state,
                    loading : false,
                    data: action.payload,
                    error: ''
                }
                case actions.ADD_CONTACT_FAILURE : return {
                    ...state,
                    loading: false,
                    data : [],
                    error : action.payload
                }
    
                default : return state
    
            }
    },
    booking(state = bookingState , action){ 
        switch(action.type){
            case actions.ADD_BOOKING_REQUEST : return {
                ...state,
                show : 'pending'
            }
            case actions.ADD_BOOKING_SUCCESS : return {
                ...state,
                show : 'Result'
            }
            case actions.ADD_BOOKING_FAILURE : return {
                ...state,
                show : ''
            }

            default : return {show:''}

        }
},
showresult(state = bookingState,action){
    switch(action.type){
        case actions.SHOW_RESULT : return {
            ...state,
            show: ''
        }
        default : return ''
    }
}

}) 