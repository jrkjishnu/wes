import * as actions from './type'

export const contactDataRequest = () =>{
    return {
        type : actions.ADD_CONTACT_REQUEST
    }
}
export const contactDataSuccess = (data) =>{
    return {
        type : actions.ADD_CONTACT_SUCCESS,
        payload: data
    }
}
export const contactDataFailure = (error) =>{
    return {
        type : actions.ADD_CONTACT_FAILURE,
        payload:error
    }
}

export const bookingDataRequest = () =>{
    return {
        type : actions.ADD_BOOKING_REQUEST
    }
}
export const bookingDataSuccess = (data) =>{
    return {
        type : actions.ADD_BOOKING_SUCCESS,
        payload: data
    }
}
export const bookingDataFailure = (error) =>{
    return {
        type : actions.ADD_CONTACT_FAILURE,
        payload:error
    }
}

export const showResult = (data) =>{
    return {
        type : actions.SHOW_RESULT,
        payload: data
    }
}


