import {combineReducers} from 'redux'
import {pageDataReducer} from './Page/reducer'
import {countryReducer} from './Countries/reducer'
import { contactReducer } from './Contact/reducer'
const reducer = combineReducers({
    pageDataReducer,
    countryReducer,
    contactReducer
})

export default reducer